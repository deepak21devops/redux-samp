import { createSlice, createAsyncThunk, nanoid } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  posts: [],
  status: "idle",
  error: null,
};

export const fetchUsers = createAsyncThunk("thunk/users", async () => {
  try {
    const resp = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return resp.data;
  } catch (err) {
    return err.message;
  }
});

const PostSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addPost: {
      reducer(state, action) {
        state.posts.push(action.payload);
      },
      prepare(username, body) {
        return {
          payload: {
            id: nanoid(),
            name: username,
            body,
            date: new Date().toLocaleString(),
            templates: {
              like: 0,
              share: 0,
              subscribe: 0,
            },
          },
        };
      },
    },

    addreaction: (state, action) => {
      const { id, name } = action.payload;
      console.log(state);
      const existingPost = state.posts.find((ele) => ele.id === id);
      if (existingPost) {
        existingPost.templates[name]++;
      }
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchUsers.pending, (state, action) => {
      state.status = "Pending";
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.status = "Fullfilled";
      const loadedPost = action.payload.map((post) => {
        post.date = new Date().toLocaleString;
        post.templates = {
          like: 0,
          share: 0,
          subscribe: 0,
        };
        return post;
      });
      state.posts = state.posts.concat(loadedPost);
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.status = "Rejected";
      state.error = action.error.message;
    });
  },
});

export const allPosts = (state) => state.users.posts;
export const allStatus = (state) => state.users.status;
export const allError = (state) => state.users.error;

export const { addPost, addreaction } = PostSlice.actions;
export default PostSlice.reducer;
