import {createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import  axios  from "../services/axios";
import { toast } from 'react-toastify';

//! toast design
export const toastDesign = {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 0,
        theme: "dark"
}

//!  Resister Action Handler
export const userResister = createAsyncThunk("users/userRegister",async(data ,{rejectWithValue})=>{
   try {
    if(data.password.length < 8){
        return rejectWithValue("Password must be at least 8 characters");
    }
    const res = await axios.post("api/v1/register",data);
    return res.data;
   } catch (error) {
    return rejectWithValue(error?.response?.data?.message);
   }

});


//!  Login Action Handler
export const userLogin = createAsyncThunk("users/userLogin",async(data ,{rejectWithValue})=>{
    try {
        const res = await axios.post("api/v1/login",data);
        return res.data;
    } catch (error) {
        return rejectWithValue(error?.response?.data?.message);
    }
});


//! Onload Action Handler
export const userOnload = createAsyncThunk("users/userOnload",async(_,{rejectWithValue})=>{
    try {
        const res = await axios.get("api/v1/checkout",{
            headers : {
                authorization : `Bearer ${localStorage.getItem("codictionToken")}`
            }
        });
        return res.data;

    } catch (error) {
        return rejectWithValue(error?.response?.data?.message);
    }
});


const initialState = {
    isLoading : false ,
    data : [],
    isError : false ,
    error : null,
    isLogin : false,
    isAdmin : false,
}

const usersSlice = createSlice({
    name : "users",
    initialState,
    extraReducers :(builder)=>{
        builder

            //! <---------------Register--------------->

            .addCase(userResister.pending ,(state)=>{
                state.isLoading = true;
                state.isError = false;
                state.error = null;
                state.data = [];
            })
            .addCase(userResister.fulfilled , (state,action)=>{

                state.isLoading = false;
                state.isError = false;
                state.error = null;
                state.data = action.payload;

                 //!Toast
                 toast.success(action.payload?.message , toastDesign);
            })
            .addCase(userResister.rejected , (state,action)=>{

                state.isLoading = false;
                state.isError = true;
                state.error = action.payload;
                state.data = [];

                //!Toast
                toast.error(action.payload,toastDesign);
            })


             //! <--------------- Login --------------> 

            .addCase(userLogin.pending , (state)=>{
                state.isLoading = true;
                state.isError = false;
                state.error = null;
                state.data = [];
                state.isLogin = false ;

            })
            .addCase(userLogin.fulfilled , (state , action)=>{
                state.isLoading = false;
                state.isError = false;
                state.error = null;
                state.data = action.payload;
                state.isLogin = true ;
                if(action?.payload?.user?.role === "admin"){
                    state.isAdmin = true;
                }

                //!addToken 
                localStorage.setItem("codictionToken", action.payload?.token);

                //!Toast
                toast.success(action.payload?.message , toastDesign);


            })
            .addCase(userLogin.rejected , (state , action)=>{
                console.log(action);
                state.isLoading = false;
                state.isError = true;
                state.error = action.payload;
                state.data = [];
                state.isLogin = false ;
                
                //!Toast
                toast.error(action.payload,toastDesign);
            })

            //! <---------------Onload -------------->

            .addCase(userOnload.pending , (state)=>{
                state.isLoading = true;
                state.isError = false;
                state.error = null;
                state.isLogin = false;
                state.data = [];

            })
            .addCase(userOnload.fulfilled , (state , action)=>{

                state.isLoading = false;
                state.isError = false;
                state.error = null;
                state.data = action.payload;
                state.isLogin = true ;
                if(action?.payload?.user?.role === "admin"){
                    state.isAdmin = true;
                }

            })
            .addCase(userOnload.rejected , (state , action)=>{
                state.isLoading = false;
                state.isError = true;
                state.error = action.payload;
                state.data = [];
                state.isLogin = false ;
                state.isAdmin = false;

            })


            
    }
})


export default usersSlice.reducer;