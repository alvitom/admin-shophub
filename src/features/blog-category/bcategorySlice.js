import blogCategoryService from "./bcategoryService";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getBlogCategories = createAsyncThunk("blog-category/get-blog-categories", async (thunkAPI) => {
    try {
      return await blogCategoryService.getBlogCategories();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  });
  
  const initialState = {
    blogCategories: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
  };
  
  export const blogCategorySlice = createSlice({
    name: "blogCategories",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(getBlogCategories.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(getBlogCategories.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isError = false;
          state.isSuccess = true;
          state.blogCategories = action.payload;
        })
        .addCase(getBlogCategories.rejected, (state, action) => {
          state.isLoading = false;
          state.isError = true;
          state.isSuccess = false;
          state.message = action.error;
        });
    },
  });
  
  export default blogCategorySlice.reducer;