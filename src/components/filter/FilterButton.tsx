import { useFilterContext } from '@/hooks';
import { FilterObject } from '@/types/filter';

interface Props {
  filter: FilterObject;
}

const FilterButton = ({ filter }: Props) => {
  const { filter: selectedFilter, setFilter } = useFilterContext();
  const isSelected = selectedFilter?.name === filter.name;

  const applyFilter = (filter: FilterObject) => {
    setFilter(filter);
  };

  return (
    <div
      onClick={() => applyFilter(filter)}
      className={`flex flex-col items-center justify-center p-2
      ${isSelected ? 'bg-fuchsia-500' : 'bg-fuchsia-200'}
      hover:bg-fuchsia-300 cursor-pointer`}
    >
      <img src={filter.iconUrl} width={50} />
      <div>{filter.name}</div>
    </div>
  );
};

export default FilterButton;
