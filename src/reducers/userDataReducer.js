import {
  ADD_POSTS,
  DELETE_POST,
  GET_ALL_POSTS,
  GET_USER_DATA,
  GET_USER_POSTS,
  SET_CURRENT,
  SET_LOADING,
  UPDATE_POST,
} from "../actions/types";

const initialState = {
  user: null,
  userPosts: [],
  allPosts: [],
  current: null,
  loading: false,
};

const userDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_DATA:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case GET_USER_POSTS:
      return {
        ...state,
        userPosts: action.payload,
        loading: false,
      };
    case GET_ALL_POSTS:
      return {
        ...state,
        allPosts: action.payload,
        loading: false,
      };
    case ADD_POSTS:
      return {
        ...state,
        userPosts: [action.payload, ...state.userPosts],
      };
    case UPDATE_POST:
      return {
        ...state,
        userPosts: state.filter((post) =>
          post._id === action.payload.id ? action.payload : post
        ),
        loading: false,
      };
    case DELETE_POST:
      return {
        ...state,
        userPosts: state.filter((post) => post._id !== action.payload._id),
        loading: false,
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};

export default userDataReducer;
