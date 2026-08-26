import { configureStore } from "@reduxjs/toolkit";
import SocialSlice from './Slices/SocialSlice'
import PhysicsSlice from './Slices/PhysicsSlice'

const store = configureStore({
  reducer: {
    Social: SocialSlice,
    Physics: PhysicsSlice
  }
})

export default store;