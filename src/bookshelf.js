import React, { Component } from 'react';

import Book from './book';
import BookCategory from './bookcategory';


class BookShelf extends Component {
    render() {
    const {books,category,shelfchange}= this.props;
    let book_filtered;

    if(category==='Currently Reading'){
       book_filtered = books.filter( book => book.shelf === 'currentlyReading' );
    }else if (category==='Want To Read'){
        book_filtered = books.filter( book => book.shelf === 'wantToRead' );
    }else if (category==='Read'){
        book_filtered = books.filter( book => book.shelf === 'read' );
    }


    return(
     <div className="bookshelf">
         <BookCategory category={this.props.category} />
         <ol className= 'books-grid'>
                {book_filtered.map((book)=>(
                  <li key={book.id}>
                     <Book book={book} shelfchange={shelfchange}/> 
                  </li>
                ))}         
            </ol>
     </div>

    )
     
    }
  }

  export default BookShelf;