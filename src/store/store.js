import { configureStore } from "@reduxjs/toolkit";
import UserDeatial from "../features/UserDeatialsSlice";

export const store = configureStore(({
    reducer: {
        app: UserDeatial
    }
}))

export default store;