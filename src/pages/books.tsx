import Layout from "@/app/layout";
import React, { useState } from "react";
import fetch from "node-fetch";
import { FiSearch } from "react-icons/fi";
import { BookProps } from "@/types";
import BookList from "@/components/BookList";

const BooksPage: React.FC = () => {
  const [books, setBooks] = useState<[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/books?search=${searchTerm}`);
      const data: BookProps = await response.json();
      console.log("Data", data);
      setBooks(data as any);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <Layout>
      <div className="flex flex-col items-center mt-8">
        <h1 className="text-4xl font-bold text-blue-500">Library!</h1>
        <div className="mt-3 text-black flex items-center">
          <input
            type="text"
            placeholder="Search for a book"
            value={searchTerm}
            onChange={handleInputChange}
            className="p-2 border rounded-md border-gray-300 w-64"
          />
          <button
            onClick={handleSearch}
            className="ml-2 bg-white p-2 rounded-full text-blue-500"
          >
            <FiSearch size={20} />
          </button>
        </div>
      </div>
      {loading && <div className="text-center mt-5"> Loading....</div>}
      {books && books.length > 0 && (
        <div className="mt-3">
          <BookList books={books} />
        </div>
      )}
    </Layout>
  );
};

export default BooksPage;
