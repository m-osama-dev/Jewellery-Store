const { createSlice } = require("@reduxjs/toolkit");

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    items: [],
  },

  reducers: {
    // add to wishlist if not added before...
    addToWishlist: (state, action) => {
      const item = action.payload;
      if (!state.items.some((existingitem) => existingitem.id === item.id)) {
        state.items.push(item);
      }
    },

    // remove from wishlist ..
    removeFromWishlist: (state, action) => {
      const item = action.payload;
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
