import { connect } from "react-redux";
import BookShow from "./book_show";
import { getBook } from "../../actions/books";
import {getFavs, postFav, deleteFav} from "../../actions/favs"

const mapStateToProps = (state, myProps) => ({
  book: state.books[myProps.match.params.bookId],
  currentUser: state.session.currentUser,
  favs: Object.keys(state.favorites).map(id => state.favorites[id])
});

const mapDispatchToProps = dispatch => ({
  getBook: id => dispatch(getBook(id)),
  getFavs: userId => dispatch(getFavs(userId)),
  postFav: (bookId, fav) => dispatch(postFav(bookId, fav)),
  deleteFav: (bookId, favId) => dispatch(deleteFav(bookId, favId))
});

export default connect(mapStateToProps, mapDispatchToProps)(BookShow);
