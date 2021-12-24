import {createSlice} from '@reduxjs/toolkit'

const initialState = {info: null}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        makeProfile: (state, action) => {
            state.info = action.payload
        }
    }
})

export const {makeProfile} = profileSlice.actions
export const profile = (state) => state.profile
export default profileSlice.reducer 