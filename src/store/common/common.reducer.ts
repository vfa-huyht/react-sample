import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as types from "./common.type";
import { LANGUAGE } from '../../constant/common'

export interface CommonState {
  lang: string
}

const initialState: CommonState = {
  lang: LANGUAGE.EN,
}

export const authReducer = createSlice({
  name: 'common',
  initialState,
  reducers: {
    [types.CHANGE_LANGUAGE]: (state, action: PayloadAction<string>) => {
      state.lang = action.payload
    },
  },
})

export default authReducer.reducer