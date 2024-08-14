import { createSlice } from '@reduxjs/toolkit';
import { fetchPosts } from '../actions/postActions';

const postSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    loading: false
  },
  reducers: {
    addPost: (state, action) => {
      state.posts.push(action.payload);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.loading = false;
      });
  }
});

export const { addPost } = postSlice.actions;

export default postSlice.reducer;
