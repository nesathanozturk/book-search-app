import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  books: [],
};

export const getBooks = createAsyncThunk("getBooks", async () => {});

export const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
});
