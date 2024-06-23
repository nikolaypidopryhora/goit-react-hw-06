import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { contactReduser } from "./contactsSlice";
import { filterReducer } from "./filtersSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "contacts",
  storage,
};

const persistedReducer = persistReducer(persistConfig, contactReduser);

const rootReducer = combineReducers({
  contacts: persistedReducer,
  filters: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
