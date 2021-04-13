import React, { Component } from 'react';
import ShelfChanger from './shelfchanger'

class Book extends Component {
      render() {
    const { title, authors ,imageLinks,shelf}  = this.props.book;
    return(
    <div>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${imageLinks.thumbnail}})` }}></div>
          <ShelfChanger book={this.props.book} shelf={shelf} onShelfchange={this.props.shelfchange}/>
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors}</div>
      </div>
      </div>

    )
  }
}export default Book;

