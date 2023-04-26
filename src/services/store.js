import { configureStore } from "@reduxjs/toolkit";
import { articleApi } from "./article";

export const store = configureStore({
  reducer: {
    [articleApi.reducerPath]: articleApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(articleApi.middleware),
});

// This is where we set up our store, or global state. If we imagine the store to be a cake, then the reducer can be thought of as something that allows us to get a specific slice of that cake. Essentially, we can reduce the entire state to access what we need.

// Next we have the middleware. The middle ware allows us to do something with the state before we get it.
