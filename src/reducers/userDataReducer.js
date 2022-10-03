import {
  ADD_POSTS,
  DELETE_POST,
  GET_ALL_POSTS,
  GET_USER_DATA,
  GET_USER_POSTS,
  LOGIN_USER_AND_GET_TOKEN,
  LOGOUT,
  SET_ALL_POSTS_LOADING,
  SET_AUTH_LOADING,
  SET_CURRENT,
  SET_USER_LOADING,
  SET_USER_POSTS_LOADING,
  SIGNUP_USER_AND_GET_TOKEN,
  UPDATE_POST,
} from "../actions/types";

const initialState = {
  user: null,
  userPosts: null,
  allPosts: null,
  current: null,
  authLoading: false,
  userLoading: false,
  userPostsLoading: false,
  allPostsLoading: false,
  auth: false,
};

const userDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_USER_AND_GET_TOKEN:
      return {
        ...state,
        auth: action.payload,
        authLoading: false,
      };
    case LOGIN_USER_AND_GET_TOKEN:
      return {
        ...state,
        auth: true,
        authLoading: false,
      };
    case GET_USER_DATA:
      return {
        ...state,
        user: action.payload,
        userLoading: false,
      };
    case GET_USER_POSTS:
      return {
        ...state,
        userPosts: action.payload,
        userPostsLoading: false,
      };
    case GET_ALL_POSTS:
      return {
        ...state,
        allPosts: action.payload,
        allPostsLoading: false,
      };
    case ADD_POSTS:
      return {
        ...state,
        userPosts: [action.payload, ...state.userPosts],
        allPosts: [action.payload, ...state.allPosts],
        userPostsLoading: false,
      };
    case UPDATE_POST:
      return {
        ...state,
        userPosts: state.userPosts.map((post) =>
          post._id === action.payload._id ? action.payload : post
        ),
        allPosts: state.allPosts.map((post) =>
          post._id === action.payload._id ? action.payload : post
        ),
        userPostsLoading: false,
      };
    case DELETE_POST:
      return {
        ...state,
        userPosts: state.userPosts.filter(
          (post) => post._id !== action.payload
        ),
        allPosts: state.allPosts.filter((post) => post._id !== action.payload),
        userPostsLoading: false,
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case SET_AUTH_LOADING:
      return {
        ...state,
        authLoading: action.payload,
      };
    case SET_USER_LOADING:
      return {
        ...state,
        userLoading: action.payload,
      };
    case SET_USER_POSTS_LOADING:
      return {
        ...state,
        userPostsLoading: action.payload,
      };
    case SET_ALL_POSTS_LOADING:
      return {
        ...state,
        allPostsLoading: action.payload,
      };
    case LOGOUT:
      localStorage.removeItem("iz-auth-token");
      return {
        ...state,
        user: null,
        userPosts: null,
        allPosts: null,
        current: null,
        authLoading: false,
        userLoading: false,
        userPostsLoading: false,
        allPostsLoading: false,
        auth: false,
      };
    default:
      return state;
  }
};

export default userDataReducer;
