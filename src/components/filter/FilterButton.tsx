import { useFilterContext } from '@/hooks';
import { trackFilterButton } from '@/service/amplitude/trackEvent';
import { Filter } from '@/types/filter';

interface Props {
  filter: Filter;
}

const FilterButton = ({ filter }: Props) => {
  const { filter: selectedFilter, setFilter } = useFilterContext();
  const isSelected = selectedFilter?.name === filter.name;

  const handleApplyFilter = () => {
    trackFilterButton(filter.name);
    setFilter(isSelected ? null : filter);
  };

  return (
    <button
      onClick={handleApplyFilter}
      className={`flex flex-col items-center justify-center p-3 w-[100px] rounded-2xl 
      transition-all duration-200 border shrink-0
      ${
        isSelected
          ? 'bg-pink-100 border-pink-400'
          : 'bg-white border-gray-200 hover:border-pink-300 hover:bg-pink-50'
      }
      shadow-sm hover:shadow-md`}
    >
      <img
        src={isSelected ? filter.openIconUrl : filter.iconUrl}
        alt={filter.name}
        width={48}
        height={48}
      />
      <span className="text-md font-medium text-gray-700">{filter.name}</span>
    </button>
  );
};

export default FilterButton;
