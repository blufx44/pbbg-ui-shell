import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  globalOpen: false,
  mapOpen: true,
  isMenuLeft: false
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
    flipMenus: (state) => {
      state.isMenuLeft = !state.isMenuLeft;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setModal, setMapOpen, flipMenus } = uiSlice.actions

export default uiSlice.reducer;