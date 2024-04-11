import Layout from "@/app/layout";
import React, { useState } from "react";
import fetch from "node-fetch";
import { FiSearch } from "react-icons/fi";
import { AuthorProps } from "@/types";
import AuthorList from "@/components/AuthorList";

const AuthorsPage: React.FC = () => {
  const [authors, setAuthors] = useState<[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/authors?query=${searchTerm}`);
      const data: AuthorProps = await response.json();
      setAuthors(data as any);
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
        <h1 className="text-4xl font-bold text-blue-500">Authors!</h1>
        <div className="mt-3 text-black flex items-center">
          <input
            type="text"
            placeholder="Search authors"
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
      {authors && authors.length > 0 && (
        <div className="mt-3">
          <AuthorList authors={authors} />
        </div>
      )}
    </Layout>
  );
};

export default AuthorsPage;
