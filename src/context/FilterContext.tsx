import { createContext, useState, PropsWithChildren } from 'react';

type FilterContextType = {
  filter: string;
  setFilter: (filter: string) => void;
};

export const FilterContext = createContext<FilterContextType | undefined>(
  undefined,
);

export const FilterProvider = ({ children }: PropsWithChildren) => {
  const [filter, setFilter] = useState<string>('');

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  );
};
