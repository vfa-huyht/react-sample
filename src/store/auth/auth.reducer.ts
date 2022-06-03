import { createSlice } from '@reduxjs/toolkit'
import * as types from "./auth.type";

export interface AuthState {
  token: string
}

const initialState: AuthState = {
  token: '',
}

export const authReducer = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    [types.SET_TOKEN]: (state) => {
      state.token = '123456789'
    },
  },
})

export default authReducer.reducer