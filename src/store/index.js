import { configureStore } from '@reduxjs/toolkit'
import usersReducers from './users'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
const reducers = combineReducers({
  users: usersReducers
})
const persistConfig = {
  key: 'root',
  storage
}
const persistedReducer = persistReducer(persistConfig, reducers)
const isProduction = import.meta.env.MODE === 'production'
const store = configureStore({
  reducer: persistedReducer,
  devTools: !isProduction
})
export default store
