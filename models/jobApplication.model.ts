export interface JobApplication {
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
}
