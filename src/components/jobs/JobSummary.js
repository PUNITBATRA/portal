import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
const JobSummary = ({ job }) => {
  return (
    <div className="card z-depth-0 job-summary">
      <div className="card-content black-text text-darken-3">
        <span className="card-title">{job.title}</span>
        <p className="grey-text text-darken-3">{job.content}</p>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span>
            <i class=" material-icons">add_location</i>
            {job.location}
          </span>
          <span>
            {/* for viewing application to specific job */}
            <Link to={"/job/" + job.id} key={job.id}>
              <button class="btn light-blue right-align" href="#">
                View Applications
              </button>
            </Link>
          </span>
        </div>

        <br />
        <p className="grey-text text-darken-3">
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
