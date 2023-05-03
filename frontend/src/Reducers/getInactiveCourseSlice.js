import {createSlice ,  createAsyncThunk} from '@reduxjs/toolkit';
import axios from '../services/axios';



export const allInactiveCourseGet = createAsyncThunk(
    "getInactiveCourse/allInactiveCourseGet",
    async ( _ , { rejectWithValue }) => {
      try {
          const res = await axios.get("api/v2/course/getInactiveCourse");
          res.data.data.reverse();
          return res?.data;
      } catch (error) {
          rejectWithValue(error?.response?.data?.message);
      }
    }
  );


const initialState ={
    isLoading : false,
    isError : false,
    error : null,
    data : [],
}


const getInactiveCourseSlice = createSlice({
    name : 'getInactiveCourse',
    initialState,
    extraReducers: (builder) => {
      builder
      .addCase(allInactiveCourseGet.pending,(state)=>{
          state.isLoading = true;
          state.isError = false;
          state.data = [];
          state.error = null;
      })
      .addCase(allInactiveCourseGet.fulfilled,(state ,action)=>{
          state.isLoading = false;
          state.isError = false;
          state.data = action.payload;
          state.error = null;
  
      })
      .addCase(allInactiveCourseGet.rejected,(state ,action)=>{
          state.isLoading = false;
          state.isError = true;
          state.data = [];
          state.error = action.payload;
  
      })
    }
})


export default getInactiveCourseSlice.reducer ;