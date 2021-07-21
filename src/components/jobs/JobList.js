import React from "react";
import JobSummary from "./JobSummary";
import { Link } from "react-router-dom";
const JobList = ({ jobs }) => {
  return (
    <div className="job-list section">
      {jobs &&
        jobs.map((job) => {
          return (
            <Link to={"/job/" + job.id} key={job.id}>
              <JobSummary job={job} />
            </Link>
          );
        })}
    </div>
  );
};
export default JobList;
