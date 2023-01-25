import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  books: [], // state
  search: "",
  length: 0,
};

export const getBooks = createAsyncThunk("getBooks", async () => {
  const res = await axios.get(
    "https://www.googleapis.com/books/v1/volumes?q=intitle:${search.name}&printType=books&orderBy=newest&maxResults=35"
  );
  return res.data.items;
});

export const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getBooks.fulfilled, (state, action) => {
      state.books = action.payload;
      state.books.length = action.payload.length;
    });
  },
});

export default booksSlice.reducer;
