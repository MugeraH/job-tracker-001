"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { jobApplications } from "@/utils/data";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
export type JobApplication = {
  id: string;
  companyName: string;
  companyWebsite: string;
  jobTitle: string;
  position: string;
  stage: string;
  applicationDate: string | Date;
  applicationResponseDate: string | Date;

  referalStatus: string;
  referalResponse: string;

  //   status: "pending" | "processing" | "success" | "failed";
};

export const columns: ColumnDef<JobApplication>[] = [
  //   {
  //     id: "number",
  //     header: "No.",
  //     cell: ({ row }) => {
  //       const jobApplication = row.original;
  //       return <div>{1}</div>;
  //     },
  //   },
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "companyName",

    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          CompanyName
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "jobTitle",
    header: "Job Title",
  },
  {
    accessorKey: "position",
    header: "Position",
  },
  {
    accessorKey: "stage",
    header: "Application Stage",
    cell: ({ row }) => {
      const status = row.getValue("stage");
      const formatted = status + "";
      return <div className=" p-2">{formatted}</div>;
    },
  },
  {
    accessorKey: "applicationDate",
    header: "ApplicationDate",
    cell: ({ row }) => {
      const date = new Date(row.getValue("applicationDate"));
      const formatted = date.toLocaleDateString();
      return <div className="font-medium ">{formatted}</div>;
    },
  },
  {
    accessorKey: "applicationResponseDate",
    header: "ApplicationResponseDate",
    cell: ({ row }) => {
      const date = new Date(row.getValue("applicationResponseDate"));
      const formatted = date.toLocaleDateString();
      return <div className="font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "referalStatus",
    header: "Referal Status",
  },
  {
    accessorKey: "referalResponse",
    header: "Referal Response",
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const jobApplication = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() =>
                navigator.clipboard.writeText(jobApplication.companyName)
              }
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

//   {
//     accessorKey: "amount",
//     header: () => <div className="text-right">Amount</div>,
//     cell: ({ row }) => {
//       const amount = parseFloat(row.getValue("amount"))
//       const formatted = new Intl.NumberFormat("en-US", {
//         style: "currency",
//         currency: "USD",
//       }).format(amount)

//       return <div className="text-right font-medium">{formatted}</div>
//     },
//   },
