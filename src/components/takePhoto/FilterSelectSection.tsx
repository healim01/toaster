import { Button } from '@/components';
import { useFilterContext } from '@/hooks';

const FilterSelectSection = () => {
  const { setFilter } = useFilterContext();

  const applyFilter = (filter: string) => {
    setFilter(filter);
  };

  return (
    <section>
      <Button label="필터1" color="green" onClick={() => applyFilter('fog')} />
    </section>
  );
};

export default FilterSelectSection;
