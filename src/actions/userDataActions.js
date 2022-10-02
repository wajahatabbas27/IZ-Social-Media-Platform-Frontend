//========================================================================================================
// All the actions that will be triggered when we need to update the state in the reducer
//========================================================================================================
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
} from "./types";
import axios from "axios";

// endpoint where backend is deployed!
const backendURL = "http://iz-social-app-backend.herokuapp.com";

// Action to SignUp and Get Token
export const signUp = (userData) => async (dispatch) => {
  dispatch({
    type: SET_AUTH_LOADING,
    payload: true,
  });
  try {
    const res = await axios({
      method: "POST",
      url: `${backendURL}/api/users`,
      headers: {
        "Content-Type": "application/json",
      },
      data: userData,
    });
    const token = await res.data;
    // console.log("Token ==>> ", token);
    // Storing the token to the localStorage
    localStorage.setItem("iz-auth-token", token.token);
    dispatch({
      type: SIGNUP_USER_AND_GET_TOKEN,
      payload: token.token ? true : false,
    });
  } catch (err) {
    console.log("error: ", err?.response?.data);
  }
  dispatch({
    type: SET_AUTH_LOADING,
    payload: false,
  });
};

// Action to login and Get token
export const logIn = (loginData) => async (dispatch) => {
  dispatch({
    type: SET_AUTH_LOADING,
    payload: true,
  });
  try {
    const res = await axios({
      method: "POST",
      url: `${backendURL}/api/auth`,
      headers: {
        "Content-Type": "application/json",
      },
      data: loginData,
    });

    const token = await res.data;

    // Storing the token to the localStorage
    localStorage.setItem("iz-auth-token", token.token);

    dispatch({
      type: LOGIN_USER_AND_GET_TOKEN,
      payload: token.token ? true : false,
    });
  } catch (err) {
    console.log("error: ", err?.response?.data);
  }
  dispatch({
    type: SET_AUTH_LOADING,
    payload: false,
  });
};

// Action to get User Data using token
export const getUser = () => async (dispatch) => {
  dispatch({
    type: SET_USER_LOADING,
    payload: true,
  });
  try {
    const res = await axios({
      method: "GET",
      url: `${backendURL}/api/auth`,
      headers: {
        "Content-Type": "application/json",
        "iz-auth-token": `${localStorage.getItem("iz-auth-token")}`,
      },
    });

    const user = await res.data;

    // Sending the data of the user to the reducer to update the state!
    dispatch({
      type: GET_USER_DATA,
      payload: user.user,
    });
  } catch (err) {
    console.log("error: ", err?.response?.data);
  }
  dispatch({
    type: SET_USER_LOADING,
    payload: false,
  });
};

// Action to get User Posts using token
export const getUserPosts = (userId) => async (dispatch) => {
  dispatch({
    type: SET_USER_POSTS_LOADING,
    payload: true,
  });
  try {
    const res = await axios({
      method: "GET",
      url: `${backendURL}/api/posts/${userId}`,
      headers: {
        "Content-Type": "application/json",
        "iz-auth-token": `${localStorage.getItem("iz-auth-token")}`,
      },
    });

    const userPosts = await res.data;

    // dispatch to send the data to the user posts
    dispatch({
      type: GET_USER_POSTS,
      payload: userPosts.posts,
    });
  } catch (err) {
    console.log("error: ", err?.response?.data);
  }
  dispatch({
    type: SET_USER_POSTS_LOADING,
    payload: false,
  });
};

// Action to get all Posts
export const getAllPosts = () => async (dispatch) => {
  dispatch({
    type: SET_ALL_POSTS_LOADING,
    payload: true,
  });
  try {
    const res = await axios({
      method: "GET",
      url: `${backendURL}/api/posts`,
      headers: {
        "Content-Type": "application/json",
        "iz-auth-token": `${localStorage.getItem("iz-auth-token")}`,
      },
    });

    const allPosts = await res.data;

    // dispatch to update the all Posts in the reducer
    dispatch({
      type: GET_ALL_POSTS,
      payload: allPosts.posts,
    });
  } catch (err) {
    console.log("error: ", err?.response?.data);
  }
  dispatch({
    type: SET_ALL_POSTS_LOADING,
    payload: false,
  });
};

// Action to Add Post
export const addPost = (postData) => async (dispatch) => {
  dispatch({
    type: SET_USER_POSTS_LOADING,
    payload: true,
  });
  try {
    const res = await axios({
      method: "POST",
      url: `${backendURL}/api/posts`,
      headers: {
        "Content-Type": "application/json",
        "iz-auth-token": `${localStorage.getItem("iz-auth-token")}`,
      },
      data: postData,
    });

    const post = await res.data;

    dispatch({
      type: ADD_POSTS,
      payload: post.post,
    });
  } catch (err) {
    console.log("error: ", err?.response?.data);
  }
  dispatch({
    type: SET_USER_POSTS_LOADING,
    payload: false,
  });
};

// Action to Update Post by its id
export const updatePost = (updatePostData) => async (dispatch) => {
  dispatch({
    type: SET_USER_POSTS_LOADING,
    payload: true,
  });
  try {
    const res = await axios({
      method: "PUT",
      url: `${backendURL}/api/posts/${updatePostData.id}`,
      data: {
        body: updatePostData.body,
      },
      headers: {
        "Content-Type": "application/json",
        "iz-auth-token": `${localStorage.getItem("iz-auth-token")}`,
      },
    });

    const returnedUpdatedPost = await res.data;

    // dispatch the data returning as the updated post to show on the screen!
    dispatch({
      type: UPDATE_POST,
      payload: returnedUpdatedPost.post,
    });
  } catch (err) {
    console.log("error: ", err?.response?.data);
  }
  dispatch({
    type: SET_USER_POSTS_LOADING,
    payload: false,
  });
};

// Action to Delete a Post by its Id
export const deletePost = (postId) => async (dispatch) => {
  dispatch({
    type: SET_USER_POSTS_LOADING,
    payload: true,
  });
  try {
    await axios({
      method: "DELETE",
      url: `${backendURL}/api/posts/${postId}`,
      headers: {
        "Content-Type": "application/json",
        "iz-auth-token": `${localStorage.getItem("iz-auth-token")}`,
      },
    });

    console.log("The Post has been Deleted!");

    dispatch({
      type: DELETE_POST,
      payload: postId,
    });
  } catch (err) {
    console.log("error: ", err?.response?.data);
  }
  dispatch({
    type: SET_USER_POSTS_LOADING,
    payload: false,
  });
};

// Action to Set Current to Update the post
export const setCurrent = (post) => ({
  type: SET_CURRENT,
  payload: post,
});

// Action to Set Logout
export const logout = () => ({
  type: LOGOUT,
  });
