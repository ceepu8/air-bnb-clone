import { SearchFormProps } from '@/components/searchbar/place-searchbar/interface';
import { SearchFormContext } from '@/components/searchbar/place-searchbar/SearchPlaceContext';
import React, { useContext } from 'react';

const useDecreaseIncrease = (code: any) => {
  const context = useContext(SearchFormContext);

  const handleIncreasePeople = () => {
    context?.setState?.((state: SearchFormProps) => {
      return {
        ...state,
        people: {
          ...state.people,
          [code]: state.people[code as keyof typeof state.people] + 1,
        },
      };
    });
  };

  const handleDecreasePeople = () => {
    context?.setState?.((state) => {
      return {
        ...state,
        people: {
          ...state.people,
          [code]: state.people[code as keyof typeof state.people] - 1,
        },
      };
    });
  };

  return [handleIncreasePeople, handleDecreasePeople];
};

export default useDecreaseIncrease;
