import { BookProps } from "@/types";
import Image from "next/image";
import React from "react";

const Book: React.FC<{ book: BookProps }> = ({ book }) => {
  const { title, author, description, image } = book;
  return (
    <div className="bg-gray-900 rounded-lg shadow-md p-4">
      <Image
        src={image}
        alt={title}
        width={100}
        height={140} // Set the height of the image to 140
        className="w-32 h-40 object-cover rounded-md mx-auto mb-4"
      />
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 mb-2">By {author}</p>
      <p className="text-gray-500">{description}</p>
    </div>
  );
};

export default Book;
