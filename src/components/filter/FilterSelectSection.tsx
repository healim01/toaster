import FilterButton from '@/components/filter/FilterButton';
import { Filter } from '@/constants/filter';

const FilterSelectSection = () => {
  return (
    <section className="flex gap-3 p-3 w-full h-[15%] overflow-x-scroll bg-white rounded-lg shadow-md">
      {Object.entries(Filter).map(([key, value]) => (
        <FilterButton key={key} filter={value} />
      ))}
    </section>
  );
};

export default FilterSelectSection;
