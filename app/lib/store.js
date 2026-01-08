
import cartReducer from "./cartSlice"
import wishlistReducer from "./wishlistSlice"
import { configureStore } from "@reduxjs/toolkit";
export const store = configureStore ({
    reducer : {
        cart : cartReducer,
        wishlist : wishlistReducer
    },
});