import { configureStore } from "@reduxjs/toolkit";
import blogReducer from './blogSlice'

export default configureStore({
    reducer:{
        app:blogReducer
    }
})