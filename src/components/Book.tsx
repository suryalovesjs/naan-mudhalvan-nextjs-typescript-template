import { BookProps } from "@/types";
import React from "react";

const Book: React.FC<{ book: BookProps }> = ({ book }) => {
  const { title, author, description, image } = book;
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img
        src={image}
        alt={title}
        className="w-32 h-40 object-cover rounded-md mx-auto mb-4"
      />
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 mb-2">By {author}</p>
      <p className="text-gray-500">{description}</p>
    </div>
  );
};

export default Book;
