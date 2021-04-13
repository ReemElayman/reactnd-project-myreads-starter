import React, { Component } from 'react';



class ShelfChanger extends Component {

    
    state={
        shelf:this.props.shelf
    }
  
 
    handleShelfChange= (e)=> {
        this.setState({
            shelf:e.target.value
           })
        this.props.onShelfchange(this.props.book,e.target.value);
      }
    render() {
        return(
        <div className="book-shelf-changer">
        <select value={this.props.shelf}
          onChange={this.handleShelfChange}>
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
        )
    }
  }

  export default ShelfChanger;