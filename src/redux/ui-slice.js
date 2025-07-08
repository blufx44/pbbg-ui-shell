import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  globalOpen: false,
  mapOpen: true,
  isMenuLeft: false,
  isMovingDPad: false,
  dPadLocation: {x: null, y: null}
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
    setMoveDPad:  (state, action) => {
      state.isMovingDPad = action.payload;
    },
    setDPadLocation:  (state, action) => {
      state.dPadLocation = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setModal, setMapOpen, flipMenus, setMoveDPad, setDPadLocation } = uiSlice.actions

export default uiSlice.reducer;