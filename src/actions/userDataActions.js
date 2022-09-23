//========================================================================================================
// All the actions that will be triggered when we need to update the state in the reducer
//========================================================================================================

import {
  ADD_POSTS,
  DELETE_POST,
  GET_ALL_POSTS,
  GET_USER_DATA,
  GET_USER_POSTS,
  SET_CURRENT,
  SET_LOADING,
  UPDATE_POST,
} from "./types";
import axios from "axios";

const BACKEND_URL = "https://iz-social-app-backend.herokuapp.com/";

// Action to SignUp and Get Token
export const signUp = async (userData) => {
  setLoading(true);
  try {
    const res = await axios({
      method: "POST",
      url: `${BACKEND_URL}/api/users`,
      headers: {
        "Content-Type": "application/json",
      },
      data: userData,
    });

    const token = await res.data;

    // Storing the token to the localStorage
    localStorage.setItem("iz-auth-token", token);
  } catch (err) {
    console.log("error: ", err);
  }
  setLoading(false);
};

// Action to login and Get token
export const logIn = async (loginData) => {
  setLoading(true);
  try {
    const res = await axios({
      method: "POST",
      url: `${BACKEND_URL}/api/auth`,
      headers: {
        "Content-Type": "application/json",
      },
      data: loginData,
    });

    const token = await res.data;

    // Storing the token to the localStorage
    localStorage.setItem("iz-auth-token", token);
  } catch (err) {
    console.log("error", err);
  }
  setLoading(false);
};

// Action to get User Data using token
export const getUser = () => async (dispatch) => {
  setLoading(true);
  try {
    const res = await axios({
      method: "GET",
      url: `${BACKEND_URL}/api/auth`,
      headers: {
        "Content-Type": "application/json",
        "iz-auth-token": `${localStorage.getItem("iz-auth-token")}`,
      },
    });

    const user = await res.data;

    // Sending the data of the user to the reducer to update the state!
    dispatch({
      type: GET_USER_DATA,
      payload: user,
    });
  } catch (err) {
    console.log("error: ", err);
  }
  setLoading(false);
};

// Action to get User Posts using token
export const getUserPosts = (userId) => async (dispatch) => {
  setLoading(true);
  try {
    const res = await axios({
      method: "GET",
      url: `${BACKEND_URL}/api/posts/${userId}`,
      headers: {
        "Content-Type": "application/json",
        "iz-auth-token": `${localStorage.getItem("iz-auth-token")}`,
      },
    });

    const userPosts = await res.data;

    // dispatch to send the data to the user posts
    dispatch({
      type: GET_USER_POSTS,
      payload: userPosts,
    });
  } catch (err) {
    console.log("error: ", err);
  }
  setLoading(false);
};

// Action to get all Posts
export const getAllPosts = () => async (dispatch) => {
  setLoading(true);
  try {
    const res = await axios({
      method: "GET",
      url: `${BACKEND_URL}/api/posts`,
      headers: {
        "Content-Type": "application/json",
        "iz-auth-token": `${localStorage.getItem("iz-auth-token")}`,
      },
    });

    const allPosts = await res.data;

    // dispatch to update the all Posts in the reducer
    dispatch({
      type: GET_ALL_POSTS,
      payload: allPosts,
    });
  } catch (error) {
    console.log("error: ", err);
  }
  setLoading(false);
};

// Action to Add Post
export const addPost = (postData) => async (dispatch) => {
  setLoading(true);
  try {
    const res = await axios({
      method: "POST",
      url: `${BACKEND_URL}/api/posts`,
      headers: {
        "Content-Type": "application/json",
        "iz-auth-token": `${localStorage.getItem("iz-auth-token")}`,
      },
    });

    const post = await res.data;

    dispatch({
      type: ADD_POSTS,
      payload: post,
    });
  } catch (err) {
    console.log("error: ", err);
  }
  setLoading(false);
};

// Action to Update Post by its id
export const updatePost = (updatePostData) => async (dispatch) => {
  setLoading(true);
  try {
    const res = await axios({
      method: "PUT",
      url: `${BACKEND_URL}/api/posts/${updatePostData.id}`,
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
      payload: returnedUpdatedPost,
    });
  } catch (err) {
    console.log("error: ", err);
  }
  setLoading(false);
};

// Action to Delete a Post by its Id
export const deletePost = (postId) => async (dispatch) => {
  setLoading(true);
  try {
    await axios({
      method: "DELETE",
      url: `${BACKEND_URL}/api/posts/${postId}`,
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
    console.log("error: ", err);
  }
  setLoading(false);
};

// Action to Set Current to Update the post
export const setCurrent = (post) => ({
  type: SET_CURRENT,
  payload: post,
});

// Action to Set Loading
export const setLoading = (loading) => ({
  type: SET_LOADING,
  payload: loading,
});
