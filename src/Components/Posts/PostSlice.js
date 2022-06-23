import { createSlice, createAsyncThunk, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    name: "Deepak",
    body: "Hello People, This is Deepak",
    templates: {
      like: 0,
      share: 0,
      subscribe: 0,
    },
  },
  {
    id: "2",
    name: "Edward",
    body: "Hello People, This is Edward",
    templates: {
      like: 0,
      share: 0,
      subscribe: 0,
    },
  },
];

const PostSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addPost: {
      reducer(state, action) {
        state.push(action.payload);
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
      const existingPost = state.find((ele) => ele.id === id);
      if (existingPost) {
        existingPost.templates[name]++;
      }
    },
  },
});

export const allPosts = (state) => state.users;

export const { addPost, addreaction } = PostSlice.actions;
export default PostSlice.reducer;
