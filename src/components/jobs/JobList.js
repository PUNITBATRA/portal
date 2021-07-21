import React from "react";
import JobSummary from "./JobSummary";
const JobList = ({ jobs }) => {
  if (jobs) {
    return (
      <div className="job-list section">
        {jobs &&
          jobs.map((job) => {
            return <JobSummary job={job} />;
          })}
      </div>
    );
  } else {
    return <h4 style={{ padding: "25%" }}>Your posted job will appear here</h4>;
  }
};

export default JobList;
