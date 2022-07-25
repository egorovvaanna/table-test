import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchPosts, fetchSearchPosts } from "./acyncFetches";
import { ActionSort, PostsPayload, PostsState } from "../../types/types";

const initialState: PostsState = {
  postsArr: [],
  isLoading: false,
  error: false,
  totalCountPosts: 0,
  pages: [],
  currentPage: 1,
  search: "",
  sort: {
    id: null,
    title: null,
    body: null,
  },
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setCurrentPage(state) {
      state.currentPage = 1;
    },
    setNextPage(state) {
      state.currentPage += 1;
    },
    setPreviousPage(state) {
      state.currentPage -= 1;
    },
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
    sortPostsById(state) {
      if (state.sort.id === null || state.sort.id === "Increment") {
        state.postsArr = state.postsArr.sort((a, b) => b.id - a.id);
        state.sort.id = "Decrement";
        return;
      } else {
        state.postsArr = state.postsArr.sort((a, b) => a.id - b.id);
        state.sort.id = "Increment";
      }
    },
    sortPostsBy(state, action: PayloadAction<ActionSort>) {
      const sortBy = `state.sort.${action.payload}`;
      if (sortBy === null || state.sort[action.payload] === "Increment") {
        state.postsArr = state.postsArr.sort((a, b) =>
          b[action.payload].localeCompare(a[action.payload])
        );
        state.sort[action.payload] = "Decrement";
        return;
      } else {
        state.postsArr = state.postsArr.sort((a, b) =>
          a[action.payload].localeCompare(b[action.payload])
        );
        state.sort[action.payload] = "Increment";
      }
    },
  },
  extraReducers: {
    [fetchPosts.fulfilled.type]: (
      state,
      action: PayloadAction<PostsPayload>
    ) => {
      state.isLoading = false;
      state.error = false;
      state.postsArr = action.payload.posts;
      state.totalCountPosts = Number(action.payload.totalCount);
      state.pages = Array.from(
        { length: Math.ceil(state.totalCountPosts / 10) },
        (_, i) => i + 1
      );
    },

    [fetchPosts.rejected.type]: (state) => {
      state.error = true;
      state.isLoading = false;
    },

    [fetchPosts.pending.type]: (state) => {
      state.error = false;
      state.isLoading = true;
    },

    [fetchSearchPosts.fulfilled.type]: (
      state,
      action: PayloadAction<PostsPayload>
    ) => {
      state.isLoading = false;
      state.error = false;
      state.postsArr = action.payload.posts.filter((item) => {
        return Object.keys(item).some(
          (key) =>
            key !== "userId" &&
            //@ts-ignore
            item[key].toString().toLowerCase().includes(state.search)
        );
      });
      state.totalCountPosts = state.postsArr.length;
    },
    [fetchSearchPosts.rejected.type]: (state) => {
      state.error = true;
      state.isLoading = false;
    },

    [fetchSearchPosts.pending.type]: (state) => {
      state.error = false;
      state.isLoading = true;
    },
  },
});

export const {
  setCurrentPage,
  setNextPage,
  setPreviousPage,
  sortPostsById,
  sortPostsBy,
  setSearch,
} = postsSlice.actions;

export default postsSlice.reducer;
