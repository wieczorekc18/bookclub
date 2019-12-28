import React from "react";
import { connect } from "react-redux";
import BookForm from "./book_form";
import { getBook, updateBook } from "../../actions/books";

const mapStateToProps = (state, myProps) => {
  const defaultBook = { isbn: 0, title: "", author: "", notes: "", description: "", genre: "" };
  const book = state.books[myProps.match.params.bookId] || defaultBook;
  const formType = "Update Book";

  return { book, formType };
};
 
const mapDispatchToProps = dispatch => {
  return {
    getBook: id => dispatch(getBook(id)),
    action: book => dispatch(updateBook(book))
  };
};

class EditForm extends React.Component {
  componentDidMount() {
    this.props.getBook(this.props.match.params.bookId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.book.id != this.props.match.params.bookId) {
      this.props.getBook(this.props.match.params.bookId);
    }
  }

  render() {
    const { action, formType, book } = this.props;
    return <BookForm action={action} formType={formType} book={book} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditForm);
