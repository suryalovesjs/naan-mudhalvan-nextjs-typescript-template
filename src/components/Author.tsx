import { AuthorProps } from "@/types";
import Image from "next/image";
import React from "react";

const Author: React.FC<{ author: AuthorProps }> = ({ author }) => {
  const { name, birth_date, image } = author;
  return (
    <div className="bg-gray-900 rounded-lg shadow-md p-4">
      <Image
        src={image}
        alt={name}
        width={100}
        height={140} 
        className="w-32 h-40 object-cover rounded-md mx-auto mb-4"
      />
      <h2 className="text-xl font-semibold mb-2">{name}</h2>
      <p className="text-gray-600 mb-2">Born: {birth_date}</p>
    </div>
  );
};

export default Author;
