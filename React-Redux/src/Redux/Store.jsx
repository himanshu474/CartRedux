import {configureStore} from '@reduxjs/toolkit'
import productSlice from './slices/productSlice'
import cartSlice from './slices/cartSlice';
import categorySlice from './slices/categorySlice'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from "redux-persist";
  import storage from "redux-persist/lib/storage"

const persistConfig={
    key:"root",
    version:1,
    storage,
}

const persistedCartReducer = persistReducer(persistConfig, cartSlice);

export const store=configureStore({
    reducer:{
        categories:categorySlice,
        products:productSlice,
        carts:persistedCartReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),
})

export let persistor = persistStore(store);