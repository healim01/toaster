import { FilterButton } from '@/components/filter';
import { Filters } from '@/constants/filter';

const FilterSelectSection = () => {
  return (
    <section className="flex gap-3 p-3 w-full h-[120px] overflow-x-scroll bg-gray-50 rounded-lg shadow-md">
      {Object.entries(Filters).map(([key, value]) => (
        <FilterButton key={key} filter={value} />
      ))}
    </section>
  );
};

export default FilterSelectSection;
