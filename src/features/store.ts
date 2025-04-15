import { configureStore } from "@reduxjs/toolkit";
import { categoryApi } from "./categories/category.api";
import { setupListeners } from "@reduxjs/toolkit/query";
import { postApi } from "./posts/post.api";

const store = configureStore({
  reducer: {
    [postApi.reducerPath]: postApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
  },
  middleware: (getDefaulMiddleware) =>
    getDefaulMiddleware().concat(postApi.middleware, categoryApi.middleware),
});

setupListeners(store.dispatch);

// Define type aliases for RootState and AppDispatch for TypeScript type inference.
// RootState represents the overall state type, and AppDispatch represents the type of the store's dispatch function.
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
