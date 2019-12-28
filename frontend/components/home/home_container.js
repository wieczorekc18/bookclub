import { connect } from "react-redux";
import Home from "./home";

import { logout } from "../../actions/users";
import {getBooks, deleteBook} from "../../actions/books"

const mapStateToProps = state => {
//   // debugger
  return {
    currentUser: state.session.currentUser,
    books: Object.keys(state.books).map(id => state.books[id])
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  getBooks: () => dispatch(getBooks()),
  deleteBook: id => dispatch(deleteBook(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
