import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  globalOpen: false,
  mapOpen: true
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setModal: (state, action) => {
      state.globalOpen = action.payload;
    },
    setMapOpen: (state) => {
      state.mapOpen = !state.mapOpen;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setModal, setMapOpen } = uiSlice.actions

export default uiSlice.reducer;