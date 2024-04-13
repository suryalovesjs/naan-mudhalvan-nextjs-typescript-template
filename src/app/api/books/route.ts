import fetch from "node-fetch";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const searchQuery = searchParams.get("query");
  const url = `https://openlibrary.org/search.json?q=${searchQuery}&limit=10`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    const selectedFields = data.docs.map((doc: any) => {
      return {
        title: doc.title,
        author: doc.author_name,
        description: '',
        image:
          doc.isbn && doc.isbn.length > 0
            ? `https://covers.openlibrary.org/b/isbn/${doc.isbn[0]}-L.jpg`
            : "https://www.shutterstock.com/image-vector/blank-vertical-book-cover-template-600nw-172777709.jpg",
        other_data: { ...doc },
      };
    });
    return Response.json(selectedFields);
  } catch (error) {
    console.error("Error:", error);
    return Response.json({ status: "error" });
  }
}
