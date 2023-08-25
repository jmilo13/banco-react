import { createSlice } from '@reduxjs/toolkit'

const accountsSlice = createSlice({
  name: 'accounts',
  initialState: [],
  reducers: {
    add: (state, action) => {
      return action.payload;
    },
    remove: () => []
  }
})

export const { add, remove } = accountsSlice.actions
export default accountsSlice.reducer
