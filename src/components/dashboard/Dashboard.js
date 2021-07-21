import React from "react";
import JobList from "../jobs/JobList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import Home from "./home.png";
class Dashboard extends React.Component {
  render() {
    const { jobs, auth } = this.props;
    if (!auth.uid) return <img src={Home} width="100%" height="565px" />;
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <JobList jobs={jobs} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    jobs: state.firestore.ordered.jobs,
    auth: state.firebase.auth,
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "jobs", orderBy: ["createdAt", "desc"] }])
)(Dashboard);
