import fetch from "node-fetch";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const searchQuery = searchParams.get("query");
  const url = `https://openlibrary.org/search/authors.json?q=${searchQuery}&limit=10`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    const selectedFields = data.docs.map((doc: any) => {
      return {
        name: doc.name,
        birth_date: doc.birth_date,
        image: `https://covers.openlibrary.org/a/olid/${doc.key}-L.jpg`,
        other_data: { ...doc },
      };
    });
    return Response.json(selectedFields);
  } catch (error) {
    console.error("Error:", error);
    return Response.json({ status: "error" });
  }
}
