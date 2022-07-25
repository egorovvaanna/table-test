import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { PostItem } from "../../types/types";

export const fetchPosts = createAsyncThunk(
  "posts/fetch",
  async (page: number = 1, thunkAPI) => {
    try {
      const response = await axios.get<PostItem[]>(
        "https://jsonplaceholder.typicode.com/posts",
        {
          params: {
            _limit: 10,
            _page: page,
          },
        }
      );
      return {
        posts: response.data,
        totalCount: response.headers["x-total-count"],
      };
    } catch (error) {
      return thunkAPI.rejectWithValue("Что-то пошло не так :(");
    }
  }
);

export const fetchSearchPosts = createAsyncThunk(
  "postsSerch/fetch",
  async (search: string, thunkAPI) => {
    try {
      const response = await axios.get<PostItem[]>(
        "https://jsonplaceholder.typicode.com/posts"
      );
      return {
        posts: response.data,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue("Что-то пошло не так :(");
    }
  }
);
