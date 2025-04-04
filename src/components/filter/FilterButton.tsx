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
    <button
      onClick={() => applyFilter(filter)}
      className={`flex flex-col items-center justify-center p-3 w-[100px] rounded-2xl 
      transition-all duration-200 border 
      ${
        isSelected
          ? 'bg-fuchsia-100 border-fuchsia-400'
          : 'bg-white border-gray-200 hover:border-fuchsia-300 hover:bg-fuchsia-50'
      }
      shadow-sm hover:shadow-md`}
    >
      <img
        src={filter.iconUrl}
        alt={filter.name}
        width={48}
        height={48}
        className="mb-2"
      />
      <span className="text-sm font-medium text-gray-700">{filter.name}</span>
    </button>
  );
};

export default FilterButton;
