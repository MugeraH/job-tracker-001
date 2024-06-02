// "use client";
//this is a server component
import { jobApplications } from "@/utils/data";
import React from "react";
import { DataTable } from "./data-table";
import { columns } from "./colums";
import Container from "@/components/Container";
import { JobApplication } from "@/models/jobApplication.model";

type Props = {};

async function getApplications(): Promise<JobApplication[]> {
  const res = await fetch("");

  const data = await res.json();
  return data;
}

async function Jobs({}: Props) {
  const data = getApplications();
  return (
    <Container className="pt-[1rem]">
      <section className="">
        <div className="">
          {/* <h1 className="text-3xl font-bold">My Jobs</h1> */}

          <DataTable columns={columns} data={jobApplications} />
        </div>
      </section>
    </Container>
  );
}

export default Jobs;
