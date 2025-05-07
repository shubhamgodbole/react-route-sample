import { useState } from "react";
import type { ColumnDef, SortingState } from "@tanstack/react-table";
import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import MiniLoader from "../loading/MiniLoader";
import NoDataFound from "../data-not-found";

interface DataTableProps<TData, TValue> {
  columns: Array<ColumnDef<TData, TValue>>;
  data: Array<TData>;
  loading?: boolean;
  className?: string;
  noDataMessage?: string;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  className = "",
  loading = false,
  noDataMessage = "No data",
}: Readonly<DataTableProps<TData, TValue>>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    enablePinning: true,
    state: {
      sorting,
    },
  });

  return (
    <div className={cn("overflow-hidden rounded-md", className)}>
      <Table>
        <TableHeader className="bg-muted">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead
                  key={header.id}
                  className="sticky left-0 flex-nowrap text-nowrap bg-muted text-primary"
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody className="relative">
          <TableRow
            className={cn("absolute size-full", {
              hidden: !loading,
            })}
          >
            <TableCell className="flex size-full items-center justify-center bg-muted opacity-50">
              <MiniLoader />
            </TableCell>
          </TableRow>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
                className="hover:bg-primary/10"
              >
                {row.getCenterVisibleCells().map((cell) => (
                  <TableCell
                    className="flex-nowrap text-nowrap bg-card"
                    key={cell.id}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow className="hover:bg-transparent">
              <TableCell colSpan={columns.length} className="h-52 text-center">
                {loading ? null : <NoDataFound title={noDataMessage} />}
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
