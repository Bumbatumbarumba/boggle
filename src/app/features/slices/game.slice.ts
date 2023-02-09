import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface GameStates {
  currentWord: string;
  isMouseDown: boolean;
}

const initialState: GameStates = {
  currentWord: '',
  isMouseDown: false,
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    addLetters: (state, action: PayloadAction<string>) => {
      state.currentWord += action.payload;
    },
    removeLetters: (state) => {
      state.currentWord = state.currentWord.substring(
        0,
        state.currentWord.length - 1
      );
    },
    clearWord: (state) => {
      state.currentWord = '';
    },
    mouseUp: (state) => {
      state.isMouseDown = false;
    },
    mouseDown: (state) => {
      state.isMouseDown = true;
    },
  },
});

export const { addLetters, removeLetters, clearWord, mouseUp, mouseDown } =
  gameSlice.actions;

export default gameSlice.reducer;
