import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect, getFirebase } from "react-redux-firebase";
import { Redirect } from "react-router-dom";
import moment from "moment";
class JobDetails extends Component {
  handleClick = () => {
    const firestore = getFirebase().firestore();
    firestore
      .collection("jobs")
      .doc(this.props.match.params.id)
      .delete()
      .then(() => {
        alert("This Job post is Deleted!");

        this.props.history.push("/");
        this.props.history.go(0);
      })
      .catch((error) => {
        console.log("error ", error);
      });
  };
  render() {
    const { job, auth } = this.props;

    if (!auth.uid) return <Redirect to="/signin" />;

    if (job) {
      return (
        <div className="container section job-details">
          <div className="card z-depth-0">
            <div className="card-content">
              <span className="card-title">{job.title}</span>
              <p>{job.content}</p>
            </div>
            <div className="card-action gret grey-text lighten-4">
              <div>
                Posted By {job.authorFirstName} {job.authorLastName}
              </div>
              <div>
                {job.createdAt
                  ? moment(job.createdAt.toDate()).calendar()
                  : "3rd May, 2020"}
              </div>
              <div className="input-field">
                <button
                  className="btn red lighten-1"
                  onClick={this.handleClick}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="container center">
          <p>Loading job...</p>
        </div>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const jobs = state.firestore.data.jobs;
  const job = jobs ? jobs[id] : null;
  return {
    job: job,
    auth: state.firebase.auth,
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "jobs" }])
)(JobDetails);
