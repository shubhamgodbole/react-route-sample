import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "./axios";

export interface RequestsFilterParameters {
 
    name: string;
    difficulty: string;
    ingredient: string;
    inventor: string;
    manufacturer: string;
 
}


export const getElixirs = async (filters: RequestsFilterParameters) => {
  const params = new URLSearchParams();

  if (filters.name) params.append("Name", filters.name);
  if (filters.difficulty) params.append("Difficulty", filters.difficulty);
  if (filters.ingredient) params.append("Ingredient", filters.ingredient);
  if (filters.inventor) params.append("InventorFullName", filters.inventor);
  if (filters.manufacturer) params.append("Manufacturer", filters.manufacturer);
  
  const response = await axiosInstance.get("/Elixirs", { params });
  return response.data;
};

export const useElixirsQuery = (filters: RequestsFilterParameters) =>
  useQuery({
    queryKey: ["elixirs", filters],
    queryFn: () => getElixirs(filters),
  });
