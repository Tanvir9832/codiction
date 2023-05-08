import { toast } from "react-toastify";
import axios from "../services/axios"
import {createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import {toastDesign} from "./userSlice";

export const coursePost = createAsyncThunk("course/coursePost",async(data,{rejectWithValue})=>{
    try {
        const res = await axios.post("api/v2/course/create",data,{
            headers :{
                authorization : `Bearer ${localStorage.getItem('codictionToken')}`,
            }
        });

        return res.data;
    } catch (error) {
        return rejectWithValue(error?.response?.data?.message);
    }
});



export const courseEnroll = createAsyncThunk("course/courseEnroll",async(id,{rejectWithValue})=>{
    try {
        const res = await axios.get(`api/v1/course/registration/${id}`, {
            headers :{
                authorization : `Bearer ${localStorage.getItem('codictionToken')}`,
            }
        })
        return res.data;
    } catch (error) {
        return rejectWithValue(error?.response?.data?.message);
    }
})




const initialState = {
    isLoading : false,
    isError : false,
    error : null,
    data : [],
};


const courseSlice = createSlice({
    name : "course",
    initialState,
    extraReducers : (builder)=>{
        builder
            .addCase(coursePost.pending,(state)=>{
                state.isLoading = true;
                state.isError = false;
                state.data = [];
                state.error = null;
            })
            .addCase(coursePost.fulfilled,(state ,action)=>{
                state.isLoading = false;
                state.isError = false;
                state.data = action.payload;
                state.error = null;

                //! toast 
                toast.success(action.payload.message,toastDesign);
            })
            .addCase(coursePost.rejected,(state ,action)=>{
                state.isLoading = false;
                state.isError = true;
                state.data = [];
                state.error = action.payload;

                //! toast 
                toast.error(action.payload,toastDesign);
            })
            .addCase(courseEnroll.pending,(state)=>{
                state.isLoading = true;
                state.isError = false;
                state.data = [];
                state.error = null;
            })
            .addCase(courseEnroll.fulfilled,(state ,action)=>{
                state.isLoading = false;
                state.isError = false;
                state.data = action.payload;
                state.error = null;

                //! toast 
                toast.success(action.payload.message,toastDesign);
            })
            .addCase(courseEnroll.rejected,(state ,action)=>{
                state.isLoading = false;
                state.isError = true;
                state.data = [];
                state.error = action.payload;

                //! toast 
                toast.error(action.payload,toastDesign);
            })
    }
})

export default courseSlice.reducer;
