import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Book from './book';
import * as BooksAPI from './BooksAPI'
class SearchBook extends Component{

    state={
        query:'',
        books:[]
    }

    updateQuery=(query)=>{
        this.setState(() => ({
            query: query
          }))

      if (query.length > 0) {
      BooksAPI.search(query)
          .then((books) => {
            if (books.error) {
              this.setState({ books: [] });
            } 
            else {

      
            const filterbooks=books.filter(book => book.hasOwnProperty('imageLinks'))
            console.log(filterbooks)
            const newbooks=filterbooks.map((book)=>{
              book.shelf='none'
              for (let i=0 ;i <this.props.shelfbooks.length;i++){
                if(book.id === this.props.shelfbooks[i].id){
                  book.shelf=this.props.shelfbooks[i].shelf
                }
              }
              return book;
            })
            this.setState({
              
              books:newbooks
            })
          }
           
          })
        }else{
          this.setState({
            books:[]
          })
        }
    }

 


render() {
    const{query,books}= this.state;
    const{shelfchange}=this.props;
    console.log(books)
          return (
            <div>
            <div className="search-books-bar">
            <Link
            to='/'> <button className="close-search">Close</button></Link>
             
              <div className="search-books-input-wrapper">
                {}
                <input type="text" placeholder="Search by title or author"  value={query}
                  onChange={(event) => this.updateQuery(event.target.value)}/>

              </div>
            </div>
            <div className="search-books-results">
            <ol className= 'books-grid'>

                {books.map((book)=>(
                  <li key={book.id}>
                     <Book book={book} shelfchange={shelfchange}/> 
                  </li>
                ))}         
            </ol>
            
            </div>
        </div>

         
               
          );


}
}

export default SearchBook;