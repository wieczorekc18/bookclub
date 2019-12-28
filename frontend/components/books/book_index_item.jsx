import React from "react";
import { Link } from "react-router-dom";


const BookIndexItem = ({ book, deleteBook }) => {
  return (
    <li>
      <Link to={`/books/${book.id}`}>{book.title}</Link>&nbsp;
      <Link to={`/books/${book.id}/edit`}>Edit</Link>
      <button onClick={() => deleteBook(book.id)}>Delete</button>
    </li>
  );
};

export default BookIndexItem;
