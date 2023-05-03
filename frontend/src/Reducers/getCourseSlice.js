import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../services/axios";

export const allCourseGet = createAsyncThunk(
  "getCourses/allCourseGet",
  async ( _ , { rejectWithValue }) => {
    try {
        const res = await axios.get("api/v2/course/getAllCourses");

        return res.data;
    } catch (error) {

        rejectWithValue(error?.response?.data?.message);
    }
  }
);

export const getSingleCourse = createAsyncThunk("getCourses/getSingleCourse" ,async(id,rejectWithValue)=>{
  try {
    const res = await axios.get(`api/v2/course/getOneCourse/${id}`);

    return res?.data;
  } catch (error) {
    console.log(error);
    rejectWithValue(error?.response?.data?.message);
  }
})




const initialState = {
    isLoading : false,
    isError : false,
    error : null,
    data : [],
};

const getCourseSlice = createSlice({
  name: "getCourses",
  initialState,
  extraReducers: (builder) => {
    builder
    .addCase(allCourseGet.pending,(state)=>{
        state.isLoading = true;
        state.isError = false;
        state.data = [];
        state.error = null;
    })
    .addCase(allCourseGet.fulfilled,(state ,action)=>{
        state.isLoading = false;
        state.isError = false;
        state.data = action.payload;
        state.error = null;

    })
    .addCase(allCourseGet.rejected,(state ,action)=>{
        state.isLoading = false;
        state.isError = true;
        state.data = [];
        state.error = action.payload;

    })
    .addCase(getSingleCourse.pending,(state)=>{

      state.isLoading = true;
      state.isError = false;
      state.data = [];
      state.error = null;
  })
  .addCase(getSingleCourse.fulfilled,(state ,action)=>{

      state.isLoading = false;
      state.isError = false;
      state.data = action.payload;
      state.error = null;

  })
  .addCase(getSingleCourse.rejected,(state ,action)=>{

      state.isLoading = false;
      state.isError = true;
      state.data = [];
      state.error = action.payload;

  })
  },
});

export default getCourseSlice.reducer;
