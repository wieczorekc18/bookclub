import * as FavUtil from "../util/fav/util"

export const RECEIVE_FAVS = "RECEIVE_FAVS"
export const RECEIVE_FAV = "RECEIVE_FAV"
export const REMOVE_FAV = "REMOVE_FAV"

const receiveFavs = (favs) => {
    return{
        type: RECEIVE_FAVS,
        favs: favs
    }
}

const receiveFav = fav => {
  return {
    type: RECEIVE_FAV,
    fav: fav
  };
};

const removeFav = favId => {
  return {
    type: REMOVE_FAV,
    favId: favId
  };
};

export const getFavs = (userId) => dispatch => {
    return(
        FavUtil.getFavs(userId).then(favs => dispatch(receiveFavs(favs)))
    )
}


export const postFav = (bookId, fav) => dispatch => {
    return(
        FavUtil.postFav(bookId, fav).then(fav => dispatch(receiveFav(fav)))
    )
}

export const deleteFav = (bookId, favId) => dispatch => {
    return(
        FavUtil.postFav(bookId, favId).then(favId => dispatch(removeFav(favId)))
    )
}
