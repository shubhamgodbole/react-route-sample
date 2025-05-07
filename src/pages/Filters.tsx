import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface Props {
  filters: Record<string, string>;
  onChange: (field: string, value: string) => void;
  onReset: () => void;
}

export const Filters = ({ filters, onChange, onReset }: Props) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onChange(name, value);
  };

  return (
    <div className="p-4 border rounded-xl shadow-sm mb-4 overflow-x-auto">
      <div className="flex flex-wrap gap-4 items-center">
        <Input
          name="name"
          placeholder="Name"
          value={filters.name}
          onChange={handleInputChange}
          className="w-full sm:w-48"
        />
        <Input
          name="difficulty"
          placeholder="Difficulty"
          value={filters.difficulty}
          onChange={handleInputChange}
          className="w-full sm:w-48"
        />
        <Input
          name="ingredient"
          placeholder="Ingredient"
          value={filters.ingredient}
          onChange={handleInputChange}
          className="w-full sm:w-48"
        />
        <Input
          name="inventor"
          placeholder="Inventor Full Name"
          value={filters.inventor}
          onChange={handleInputChange}
          className="w-full sm:w-48"
        />
        <Input
          name="manufacturer"
          placeholder="Manufacturer"
          value={filters.manufacturer}
          onChange={handleInputChange}
          className="w-full sm:w-48"
        />
        <Button
          onClick={onReset}
          variant="outline"
          className="w-full sm:w-auto whitespace-nowrap"
        >
          Reset
        </Button>
      </div>
    </div>
  );
};
