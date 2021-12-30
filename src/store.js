import { configureStore } from '@reduxjs/toolkit'
import profileReducer from './slices/profileSlice'

const store = configureStore({
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: ["profile/makeProfile", "profile/openBox", "profile/display", "profile/setMessage"],
        }
    }),

    reducer:{
        profile: profileReducer
    }
})

export default store