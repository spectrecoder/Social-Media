import {createSlice} from '@reduxjs/toolkit'
// postInfo: {message: null, docId: null}

const initialState = {info: null, lightBox: {class: 'hidden', postInfo: null}}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        makeProfile: (state, action) => {
            state.info = action.payload
        },
        openBox: (state, action) => {
            state.lightBox.class = action.payload.class
            state.lightBox.postInfo = action.payload.postData
            // state.lightBox.postInfo.message = action.payload.postData.message
            // state.lightBox.postInfo.docId = action.payload.postData.docId
        }
    }
})

export const {makeProfile, openBox} = profileSlice.actions
export const profile = (state) => state.profile
export const lb = (state) => state.profile.lightBox
export default profileSlice.reducer 