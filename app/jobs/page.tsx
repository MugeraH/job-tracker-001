// "use client";
//this is a server component
import { jobApplications } from "@/utils/data";
import React from "react";
import { DataTable } from "./data-table";
import { JobApplication, columns } from "./colums";

type Props = {};

async function getApplications(): Promise<JobApplication[]> {
  const res = await fetch("");

  const data = await res.json();
  return data;
}

async function Jobs({}: Props) {
  const data = getApplications();
  return (
    <section className="py-24">
      <div className="container">
        <h1 className="text-3xl font-bold">My Jobs</h1>

        <DataTable columns={columns} data={jobApplications} />
      </div>
    </section>
  );
}

export default Jobs;
