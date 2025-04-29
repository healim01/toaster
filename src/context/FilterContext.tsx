import { Filter } from '@/types/filter';
import { createContext, PropsWithChildren, useState } from 'react';

type FilterContextType = {
  filter: Filter | null;
  setFilter: (filter: Filter | null) => void;
};

export const FilterContext = createContext<FilterContextType | undefined>(
  undefined,
);

export const FilterProvider = ({ children }: PropsWithChildren) => {
  const [filter, setFilter] = useState<Filter | null>(null);

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  );
};
