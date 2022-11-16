import { Dispatch, SetStateAction } from 'react';
import { DateRange } from 'react-day-picker';

export interface People {
  adult: number;
  children: number;
  toddler: number;
}

export interface SearchFormProps {
  placeId: string;
  date: DateRange;
  people: People;
}

export type SearchFormContextState = {
  state: SearchFormProps;
  setState: Dispatch<SetStateAction<SearchFormProps>>;
};
