import { configureStore } from '@reduxjs/toolkit'
import KzrReducer from './Slice'

export default configureStore({
  reducer: {
    KzrSlice: KzrReducer,
  },
})
