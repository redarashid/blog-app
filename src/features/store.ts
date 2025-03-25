import { configureStore } from "@reduxjs/toolkit";
import { categoryApi } from "./categories/category.api";
import { setupListeners } from "@reduxjs/toolkit/query";

const store = configureStore({
  reducer: {
    [categoryApi.reducerPath]: categoryApi.reducer,
  },
  middleware: (getDefaulMiddleware) =>
    getDefaulMiddleware().concat(categoryApi.middleware),
});

setupListeners(store.dispatch);

export default store;
