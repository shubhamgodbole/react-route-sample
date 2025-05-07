import type { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Elixir } from "@/@types/elixir";
import TextTruncate from "@/components/text-truncate";

export const columns: Array<ColumnDef<Elixir>> = [
  {
    id: "name",
    accessorFn: (row) => row?.name,
    header: ({ column }) => {
      return (
        <button
          className="flex justify-start gap-2 text-left"
          onClick={() => {
            column?.toggleSorting(column?.getIsSorted() === "asc");
          }}
        >
          Name
          <ArrowUpDown size={16} />
        </button>
      );
    },
  },
  {
    id: "difficulty",
    accessorFn: (row) => row?.difficulty,
    cell: ({ row }) => row.getValue("difficulty") ?? "-",
    header: ({ column }) => {
      return (
        <button
          className="flex justify-start gap-2 text-left"
          onClick={() => {
            column?.toggleSorting(column?.getIsSorted() === "asc");
          }}
        >
          Difficulty
          <ArrowUpDown size={16} />
        </button>
      );
    },
  },
  {
    id: "ingredients",
    accessorFn: (row) => row?.ingredients?.map((i) => i?.name).join(", "),
    cell: ({ row }) => (
      <div className="text-sm">
        <div className="flex gap-1">
          {row.getValue("ingredients") ? (
            <TextTruncate
              minLength={25}
              className="block max-w-[150px] text-xs"
            >
              {row.getValue("ingredients")}
            </TextTruncate>
          ) : (
            "-"
          )}
        </div>
      </div>
    ),
    header: ({ column }) => {
      return (
        <button
          className="flex justify-start gap-2 text-left"
          onClick={() => {
            column?.toggleSorting(column?.getIsSorted() === "asc");
          }}
        >
          Ingredients
          <ArrowUpDown size={16} />
        </button>
      );
    },
  },
  {
    id: "inventorFullName",
    accessorFn: (row) => row?.inventorFullName,
    cell: ({ row }) => row.getValue("inventorFullName") ?? "-",
    header: ({ column }) => {
      return (
        <button
          className="flex justify-start gap-2 text-left"
          onClick={() => {
            column?.toggleSorting(column?.getIsSorted() === "asc");
          }}
        >
          Inventor
          <ArrowUpDown size={16} />
        </button>
      );
    },
  },
  {
    id: "manufacturer",
    accessorFn: (row) => row?.manufacturer,
    cell: ({ row }) => row.getValue("manufacturer") ?? "-",
    header: ({ column }) => {
      return (
        <button
          className="flex justify-start gap-2 text-left"
          onClick={() => {
            column?.toggleSorting(column?.getIsSorted() === "asc");
          }}
        >
          Manufacturer
          <ArrowUpDown size={16} />
        </button>
      );
    },
  },
];
