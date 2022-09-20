const initialState = {
  user: null,
  userPosts: [],
  allPosts: [],
  current: null,
  loading: false,
};

const userDataReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default userDataReducer;
