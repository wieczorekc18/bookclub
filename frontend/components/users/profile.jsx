import React from "react";
import { Link } from "react-router-dom";
import Logout from "./logoutMod"
import BookIndexItem from "../books/book_index_item"

class Profile extends React.Component{

    componentDidMount(){
        // debugger
        let userId = this.props.match.params.userId;
        this.props.getFavBooks(userId)
    }


    render(){
        // debugger

        const books = this.props.favorites.map(book => {
          return (
            <BookIndexItem
              key={book.id}
              book={book}
              deleteBook={this.props.deleteBook}
            />
          );
        });
        return(
            <div>
                {this.props.currentUser.username}
                <Logout/>
                <h3>My Favorites</h3>
                <ul>
                    {books}
                </ul>
                
            </div>
        )
    }
}

export default Profile