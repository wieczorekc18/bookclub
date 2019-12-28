import React from "react";
import { Link } from "react-router-dom";
import book_form from "./book_form";

class BookShow extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            class: "unfav"
        }
        this.changeFav = this.changeFav.bind(this)
        this.setFav = this.setFav.bind(this)
    }

    setFav(){
        let bookId = this.props.match.params.bookId;
        let favd = false;
        this.props.currentUser
          ? this.props.favs.forEach(fav => {
              if (fav.id == bookId) {
                favd = true;
              }
            })
          : -1;
        if (favd) {
          this.setState({ class: "fav" });
        } else {
          this.setState({ class: "unfav" });
        }
    }

    changeFav(e){
        e.preventDefault()
        let bookId = this.props.match.params.bookId
        let favd = false
        this.props.currentUser ? (
            this.props.favs.forEach(fav => {
                if(fav.id == bookId){
                    favd = true
                }
            })
        ) : (
            -1
        )
        if(favd){
            this.setState({class: "unfav"})
            this.props.deleteFav(bookId)
        }else{
            this.setState({ class: "fav" });
            this.props.postFav(bookId)
        }
    }
  componentDidMount() {
      let userId = this.props.currentUser.id
      this.props.getFavs(userId)
    this.props.getBook(this.props.match.params.bookId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.bookId && prevProps.match.params.bookId != this.props.match.params.bookId) {
      this.props.getBook(this.props.match.params.bookId);
    }
  }



  render() {
    const { book } = this.props;
    if (!book) {
      return <div>Loading Book...</div>;
    }

    return (
      <div>
        <h3>TITLE: {book.title}</h3>
        <h4>AUTHOR: {book.author}</h4>
        <h5>ISBN: {book.isbn}</h5>
        <h5>GENRE: {book.genre}</h5>
        <p>DESCRIPTION: {book.description}</p>
        <p>NOTES: {book.notes}</p>
        <h5 onClick={this.changeFav} className={this.state.class}> &#9734; Favorite this Book</h5>
        <Link to={`/books/${book.id}/edit`}>Edit</Link>
      </div>
    );
  }
}

export default BookShow;
