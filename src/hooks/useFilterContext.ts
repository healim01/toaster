import { FilterContext } from '@/context';
import { useContext } from 'react';

const useFilterContext = () => {
  const state = useContext(FilterContext);
  if (!state) throw new Error('FilterProvider not found');

  const { filter, setFilter } = state;
  return { filter, setFilter };
};

export default useFilterContext;
