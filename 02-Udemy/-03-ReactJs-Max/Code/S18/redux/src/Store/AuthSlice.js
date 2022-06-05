import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'auth',
    initialState: { auth: false },
    reducers: {
        logIn(state) {
            state.auth = true
        },

        logOut(state) {
            state.auth = false
        }
    }
})
export const authActions = authSlice.actions
export default authSlice.reducer