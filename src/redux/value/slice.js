import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const clicksSlice = createSlice({
  name: 'clicks',
  initialState: {
    value: 0,
    a: 1,
    b: 2,
    c: 3,
  },
  reducers: {
    update(state, action) {
      state.value += action.payload;
    },
  },
});

const persistConfig = {
  key: 'clicks',
  storage,
  //Сохраняет в Local Storage нолько свойство 'value'
  whitelist: ['value'],
  // Сохраняет в Local Storage всё кроме свойств 'b'
  // blacklist: ['b'],
};

export const clicksReducer = persistReducer(persistConfig, clicksSlice.reducer);

export const { update } = clicksSlice.actions;

// Selectors
export const getClicksValue = state => state.clicks.value;
