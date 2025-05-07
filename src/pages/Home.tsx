import { useState } from "react";
import { Card } from "@/components/ui/card";
import { DataTable } from "@/components/table/data-table";
import { columns } from "./columns";
import { useElixirsQuery } from "@/services/elixirsServices";
import { Filters } from "@/pages/Filters";

const Home = () => {
  const [filters, setFilters] = useState({
    name: "",
    difficulty: "",
    ingredient: "",
    inventor: "",
    manufacturer: "",
  });

  const { data: elixirs, isLoading, refetch } = useElixirsQuery(filters);

  const handleChange = (field: string, value: string) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };

  const handleReset = () => {
    const emptyFilters = {
      name: "",
      difficulty: "",
      ingredient: "",
      inventor: "",
      manufacturer: "",
    };
    setFilters(emptyFilters);
    refetch();
  };

  return (
    <div className="p-6">
      <Filters
        filters={filters}
        onChange={handleChange}
        onReset={handleReset}
      />
      <Card className="mt-5 flex flex-1 flex-col px-6 py-14">
        <DataTable
          columns={columns}
          data={elixirs ?? []}
          loading={isLoading}
          className="flex-1"
          noDataMessage={"No elixirs found"}
        />
      </Card>
    </div>
  );
};

export default Home;
