import React from "react";
import { Link } from "react-router-dom"
import BookIndexItem from "../books/book_index_item"
import NewBookForm from "../books/new_container"


class Home extends React.Component {
  componentDidMount() {
    this.props.getBooks();
  }

  componentDidUpdate(prevProps) {
      // debugger
      this.props.books.length !== prevProps.books.length ? this.props.getBooks() : -1
  }

  render() {
    // debugger;
    const books = this.props.books.map(book => {
      return (
        <BookIndexItem
          key={book.id}
          book={book}
          deleteBook={this.props.deleteBook}
        />
      );
    });
    let homePage = this.props.currentUser ? (
      <div>
        <img className="lib-background" src={window.libURL} alt="lib" />
        <div className="book-index">
          <NewBookForm />
          <h2>Books in our library</h2>
          <ul>{books}</ul>
        </div>
      </div>
    ) : (
      <div>
        <img className="lib-background" src={window.libURL} alt="lib" />
        <div className="welcome">
          <h1 className="welcome-h1">Bookclub</h1>
          <h3 className="subtitle-h3">A world of books await you</h3>
          <Link className="signup-button" to="/signup">
            Join the Club
          </Link>
        </div>
      </div>
    );
    return <div>{homePage}</div>;
  }
}

export default Home;
