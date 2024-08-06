"use client";

import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<any>[] = [
  {
    accessorKey: "running",
    header: "Running",
  },
  {
    accessorKey: "trading",
    header: "Trading",
  },
  {
    accessorKey: "water",
    header: "Water",
  },
  {
    accessorKey: "reading",
    header: "Reading",
  },
  {
    accessorKey: "gym",
    header: "Gym",
  },
  {
    accessorKey: "carnivore",
    header: "Carnivore",
  },
  {
    accessorKey: "bible",
    header: "Bible",
  },
  {
    accessorKey: "topG",
    header: "TopG",
  },
];
