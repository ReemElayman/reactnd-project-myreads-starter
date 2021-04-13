# MyReads Project

MyReads is a React Application where you can keep track of the books you are reading by providing shelevs with differnet categories like currently reading , want to read and read . In addtion to a search page where you ca search for book and add them to any shelf you want.

## TL;DR

To Run the project:

* install all project dependencies with `npm install`
* start the development server with `npm start`


## Backend Server

 [`BooksAPI.js`](src/BooksAPI.js) :

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)


## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.



