"use client";

import { ColumnDef } from "@tanstack/react-table";

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
  {
    accessorKey: "companyName",
    header: "CompanyName",
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
      return <div className="bg-green  p-2">{formatted}</div>;
    },
  },
  {
    accessorKey: "applicationDate",
    header: "ApplicationDate",
    cell: ({ row }) => {
      const date = new Date(row.getValue("applicationDate"));
      const formatted = date.toLocaleDateString();
      return <div className="font-medium bg-gray-50">{formatted}</div>;
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
