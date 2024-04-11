# Exercise 2: Creating an API to Search Authors

In this exercise, you will create an API under the `api` folder that allows users to search for authors by connecting to the Open Library API using `node-fetch`.

## Instructions

1. Create the file `src/app/api/authors/route.ts` in the project.

2. Import the required module by adding the following line at the top of the file:

    ```javascript
    import fetch from "node-fetch";
    ```

3. Define the API endpoint by adding the following line below the import statement:

    ```javascript
    const searchAuthorsEndpoint = 'https://openlibrary.org/search/authors.json';
    ```

4. Define the API route handler function

7. Test the API by sending a GET request to `http://localhost:3000/api/authors?query=<search_query>`, where `<search_query>` is the author you want to search for.

    Example: `http://localhost:3000/api/searchAuthors?query=John%20Doe`

    The API should return the search results from the Open Library API.

Congratulations! You have successfully created an API that allows users to search for authors using the Open Library API.
