export const getBooks = () => {
    return(
        $.ajax({
            method: "GET",
            url: "/api/books"
        })
    )
}

export const getBook = (id) => {
  return $.ajax({
    method: "GET",
    url: `/api/books/${id}`
  });
};

export const postBook = book => {
    // debugger
  return $.ajax({
    method: "POST",
    url: "/api/books",
    data: {book}
  });
};

export const updateBook = book => {
    // debugger
  return $.ajax({
    method: "PATCH",
    url: `/api/books/${book.id}`,
    data: {book}
  });
};

export const deleteBook = id => {
    return(
        $.ajax({
            method: "DELETE",
            url: `api/books/${id}`
        })
    )
}

export const getFavBooks = userId => {
  return $.ajax({
    method: "GET",
    url: "/api/fav_books",
    data: { userId }
  });
};