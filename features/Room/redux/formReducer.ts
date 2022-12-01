import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { addDays } from 'date-fns';
import { DateRange } from 'react-day-picker';

interface Guest {
  adult: number;
  children: number;
  toddler: number;
}

interface FormState {
  date: DateRange | undefined;
  guest: Guest;
}

const initialState: FormState = {
  date: {
    from: new Date(),
    to: addDays(new Date(), 4),
  },
  guest: {
    adult: 0,
    children: 0,
    toddler: 0,
  },
};

const formReducer = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setDate: (state, action: PayloadAction<DateRange | undefined>) => {
      return { ...state, date: action.payload };
    },
    setGuest: (state, action: PayloadAction<Guest>) => {
      return { ...state, guest: action.payload };
    },
  },
});

export const { setDate, setGuest } = formReducer.actions;

export default formReducer.reducer;
