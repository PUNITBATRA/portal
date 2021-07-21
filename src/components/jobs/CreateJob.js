import React, { Component } from "react";
import { connect } from "react-redux";
import { createJob } from "../../store/actions/jobActions";
import { Redirect } from "react-router-dom";
class CreateJob extends Component {
  state = {
    title: "",
    content: "",
    location: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    if (this.state.title && this.state.content && this.state.location) {
      this.props.createJob(this.state);
      this.props.history.push("/");
    } else {
      alert("Empty fields are not allowed.");
    }
  };
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Post New Job</h5>
          <div className="input-field">
            <input type="text" id="title" onChange={this.handleChange} />
            <label htmlFor="title">Job Title</label>
          </div>
          <div className="input-field">
            <textarea
              id="content"
              className="materialize-textarea"
              onChange={this.handleChange}
            ></textarea>
            <label htmlFor="content">Job Description</label>
          </div>
          <div className="input-field">
            <input type="text" id="location" onChange={this.handleChange} />
            <label htmlFor="location">Location</label>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1">Create</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createJob: (job) => dispatch(createJob(job)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateJob);
