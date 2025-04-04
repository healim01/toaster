import FilterButton from '@/components/filter/FilterButton';
import { Filter } from '@/constants/filter';

const FilterSelectSection = () => {
  return (
    <section className="flex gap-3 p-5 w-full h-[120px] overflow-x-scroll bg-green-200">
      {Object.entries(Filter).map(([key, value]) => (
        <FilterButton key={key} filter={value} />
      ))}
    </section>
  );
};

export default FilterSelectSection;
