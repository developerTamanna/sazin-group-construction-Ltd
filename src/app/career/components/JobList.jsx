"use client";
import { useState } from "react";
import { jobData } from "./jobData";
import JobCard from "./JobCard";
import ApplyForm from "./ApplyForm";

export default function JobList() {
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {jobData.map((job) => (
        <JobCard key={job.id} job={job} onApply={setSelectedJob} />
      ))}

      {selectedJob && (
        <div className=" fixed z-[999] top-20 bottom-0 left-1/2 transform -translate-x-1/2  bg-white dark:bg-black md:p-8 p-2 rounded-xl shadow-2xl w-full max-w-xl overflow-auto">
          <h2 className="text-2xl font-bold text-center text-red-600 mb-6">
            Apply for {selectedJob.title}
          </h2>
          <ApplyForm job={selectedJob} />
        </div>
      )}
    </div>
  );
}
