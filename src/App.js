import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './bookshelf';
import { Link,Route } from 'react-router-dom'
import SearchBook from './searchbook'
class BooksApp extends React.Component {
  state = {
  
    books:[]
   
  }



  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
       console.log(books)
      })
  }

  
  shelfhandler = (oldbook,shelf)=>{
   
    BooksAPI.update(oldbook,shelf)
    oldbook.shelf=shelf
    this.setState(prevState => ({
      books: prevState.books.filter(book => book.id !== oldbook.id).concat(oldbook)
    }));
   
  }

  render() {

    return (
      <div className="app">
        <Route exact path='/search' render={() => (
          <div className="search-books">
           <SearchBook shelfchange={this.shelfhandler} shelfbooks={this.state.books}/>
          </div>
        )}
        />
        <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <BookShelf key='1' category='Currently Reading'  books={this.state.books} shelfchange={this.shelfhandler}/>
                <BookShelf key='2' category='Want To Read' books={this.state.books} shelfchange={this.shelfhandler}/>
                <BookShelf key='3' category='Read' books={this.state.books} shelfchange={this.shelfhandler}/>
              </div>
            </div>
            <div className="open-search">
            <Link
            to='/search'> <button>Add a book</button></Link>
             
            </div>
          </div>
  
        )}
        />
      </div>
    )
  }
}

export default BooksApp
