export const buildQueryParams = (filters: Record<string, string>) => {
    const params = new URLSearchParams();
    if (filters.name) params.append("Name", filters.name);
    if (filters.difficulty) params.append("Difficulty", filters.difficulty);
    if (filters.ingredient) params.append("Ingredient", filters.ingredient);
    if (filters.inventor) params.append("InventorFullName", filters.inventor);
    if (filters.manufacturer) params.append("Manufacturer", filters.manufacturer);
    return params.toString();
  };
  