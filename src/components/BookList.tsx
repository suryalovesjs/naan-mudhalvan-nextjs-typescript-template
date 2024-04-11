import React from "react";
import Book from "./Book";
import { BookProps } from "@/types";

const BookList: React.FC<{ books: Array<BookProps> }> = ({ books }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
            {books.map((book, index) => (
                <Book key={index} book={book} />
            ))}
        </div>
    );
};

export default BookList;
