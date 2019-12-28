import { RECEIVE_FAVS, RECEIVE_FAV, REMOVE_FAV } from "../actions/favs";
import merge from "lodash/merge";

const FavReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState;
  switch (action.type) {
    case RECEIVE_FAVS:
        // debugger
      newState = {};
      let favs = Object.values(action.favs);
      favs.forEach(fav => {
        newState[fav.extract.id] = fav.extract;
      });
      return merge({}, oldState, newState);
    case RECEIVE_FAV:
      return merge({}, oldState, { [action.fav.id]: action.fav });
    case REMOVE_FAV:
      newState = merge({}, oldState);
      delete newState[action.favId];
      return newState;
    default:
      return oldState;
  }
};

export default FavReducer;
