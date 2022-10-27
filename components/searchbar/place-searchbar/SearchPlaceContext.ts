import { createContext, Dispatch, SetStateAction } from 'react';
import { SearchFormContextState } from './interface';

export const SearchFormContext = createContext<SearchFormContextState | null>(null);
