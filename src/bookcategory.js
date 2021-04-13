import React, { Component } from 'react';



class BookCategory extends Component{
render() {
    const category = this.props.category;
    return(
    <div>
    <h2 className="bookshelf-title">{category}</h2>
    </div>
    )
  }
}

export default BookCategory;