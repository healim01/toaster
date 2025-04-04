import { FilterObject } from '@/types/filter';
import { createContext, PropsWithChildren, useState } from 'react';

type FilterContextType = {
  filter: FilterObject | null;
  setFilter: (filter: FilterObject) => void;
};

export const FilterContext = createContext<FilterContextType | undefined>(
  undefined,
);

export const FilterProvider = ({ children }: PropsWithChildren) => {
  const [filter, setFilter] = useState<FilterObject | null>(null);

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  );
};
