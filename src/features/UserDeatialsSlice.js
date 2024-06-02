import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"; // Import axios

let initialState = {
    users: [],
    loading: false,
    error: null,
    searchData: [],
}

export const createUser = createAsyncThunk("users/create", async (data) => {
    try {
        const response = await axios.post("https://665bcd473e4ac90a04d803ac.mockapi.io/redux-crud/crud", data);
        // console.log(response);
        return response.data; // Return response data
    } catch (error) {
        console.error("Error creating user:", error);
        throw error; // Rethrow the error so it can be caught by the caller
    }
});

export const showUser = createAsyncThunk("read/user", async () => {
    try {
        const response = await axios.get("https://665bcd473e4ac90a04d803ac.mockapi.io/redux-crud/crud")

        return response.data
    } catch (error) {
        throw error
    }
})

export const deleteUser = createAsyncThunk("deleteuser", async (id) => {

    try {
        const response = await axios.delete(`https://665bcd473e4ac90a04d803ac.mockapi.io/redux-crud/crud/${id}`)

        return response.data
    } catch (error) {
        throw error
    }
})

export const updateUser = createAsyncThunk("update/user", async (data) => {
    console.log(data.id)
    try {
        const response = await axios.put(`https://665bcd473e4ac90a04d803ac.mockapi.io/redux-crud/crud/${data.id}`, {
            ...data
        })
        console.log(response.data)
        return response.data
    } catch (error) {
        throw error
    }
})

export const userDetailSlice = createSlice({
    name: "userDetail", // Changed from "UserDeatial" to "userDetail"
    initialState: initialState,
    reducers: {
         SearchUser:(state,action)=>{
            state.searchData=action.payload
         }
    },
    extraReducers: (builder) => {
        builder.addCase(createUser.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(createUser.fulfilled, (state, action) => {
            state.loading = false;
            state.users.push(action.payload); // Assuming payload is the new user data
        });
        builder.addCase(createUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
        builder.addCase(showUser.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(showUser.fulfilled, (state, action) => {
            state.loading = false;
            state.users = action.payload; // Assuming payload is the new user data
        });
        builder.addCase(showUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
        builder.addCase(deleteUser.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(deleteUser.fulfilled, (state, action) => {
            state.loading = false;
            const { id } = action.payload
            console.log(id)
            if (id) {
                state.users = state.users.filter((ele) => ele.id !== id)
            }
        });
        builder.addCase(deleteUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
        builder.addCase(updateUser.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(updateUser.fulfilled, (state, action) => {
            state.loading = false;
            console.log(action.payload)
            state.users = state.users.map((ele) => (
                ele.id === action.payload.id ? action.payload : ele
            ))

        });
        builder.addCase(updateUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    },

})

export const {SearchUser}=userDetailSlice.actions;

export default userDetailSlice.reducer;
