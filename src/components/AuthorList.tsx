import React from "react";
import Book from "./Book";
import { AuthorProps } from "@/types";
import Author from "./Author";

const AuthorList: React.FC<{ authors: Array<AuthorProps> }> = ({ authors }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
      {authors.map((book, index) => (
        <Author key={index} author={book} />
      ))}
    </div>
  );
};

export default AuthorList;
