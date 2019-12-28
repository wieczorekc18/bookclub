import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import BookForm from "./book_form";
import { postBook } from "../../actions/books";

const mapStateToProps = (state) => {
  const book = { isbn: 0, title: "", description: "", author: "", genre: "", notes: "" };
  const formType = "Create Book";

    return { 
        book: book, 
        formType: formType 
    };
};

const mapDispatchToProps = dispatch => {
  return {
    action: book => dispatch(postBook(book))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookForm);
