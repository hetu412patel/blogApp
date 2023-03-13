import { createSlice, createAsyncThunk} from "@reduxjs/toolkit"

export const addBlog = createAsyncThunk(
    "blog/addBlog",
    async () => {
        return fetch(`http://localhost:5000/blogs`).then((res)=> res.json())
    })

const blogSlice = createSlice({
    name:'blog',
    initialState:{
        blog:[],
        loading:false,
        error:null
    },
    extraReducers:{
        [addBlog.pending]:(state,action) => {
            state.loading = true
        },
        [addBlog.fulfilled]:(state,action) => {
            state.loading = false
            state.blog = action.payload
        },
        [addBlog.rejected]:(state,action) => {
            state.loading = false
            state.error = action.payload
        }
    }
})

export default blogSlice.reducer