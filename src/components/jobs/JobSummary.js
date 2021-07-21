import React from "react";
import moment from "moment";
const JobSummary = ({ job }) => {
  return (
    <div className="card z-depth-0 job-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{job.title}</span>
        <p>
          Posted by {job.authorFirstName} {job.authorLastName}
        </p>
        <p className="grey-text">
          {job.createdAt
            ? moment(job.createdAt.toDate()).calendar()
            : "3rd May, 2020"}
        </p>
      </div>
    </div>
  );
};
export default JobSummary;
