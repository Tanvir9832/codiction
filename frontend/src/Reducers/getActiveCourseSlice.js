import {createSlice ,  createAsyncThunk} from '@reduxjs/toolkit';
import axios from '../services/axios';


export const allActiveCourseGet = createAsyncThunk(
    "getActiveCourse/allActiveCourseGet",
    async ( _ , { rejectWithValue }) => {
      try {
          const res = await axios.get("api/v2/course/getActiveCourses");
          res.data.data.reverse();
          return res.data;
      } catch (error) {
          rejectWithValue(error.response.data.message);
      }
    }
  );



const initialState ={
    isLoading : false,
    isError : false,
    error : null,
    data : [],
}


const getCourseSlice = createSlice({
    name : 'getActiveCourse',
    initialState,
    extraReducers: (builder) => {
      builder
      .addCase(allActiveCourseGet.pending,(state)=>{
          state.isLoading = true;
          state.isError = false;
          state.data = [];
          state.error = null;
      })
      .addCase(allActiveCourseGet.fulfilled,(state ,action)=>{
          state.isLoading = false;
          state.isError = false;
          state.data = action.payload;
          state.error = null;
  
      })
      .addCase(allActiveCourseGet.rejected,(state ,action)=>{
          state.isLoading = false;
          state.isError = true;
          state.data = [];
          state.error = action.payload;
  
      })
    }
})

export default getCourseSlice.reducer ;