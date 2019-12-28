export const getFavs = userId => {
  return $.ajax({
    method: "GET",
    url: `/api/users/${userId}/favorites`
  });
};

export const postFav = (bookId, favorite) => {
  return $.ajax({
    method: "POST",
    url: `/api/books/${bookId}/favorites`,
    data: {favorite},
    contentType: false,
    processData: false
  });
};


export const deleteFav = (bookId, favId) => {
  return $.ajax({
    method: "DELETE",
    url: `api/books/${bookId}/favorites/${favId}`
  })
}
