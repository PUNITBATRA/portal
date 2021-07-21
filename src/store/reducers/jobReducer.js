const initState = {
  jobs: [
    { id: "1", title: "Job Title 1", content: "Content of Job 1" },
    { id: "2", title: "Job Title 2", content: "Content of Job 2" },
    { id: "3", title: "Job Title 3", content: "Content of Job 3" },
  ],
};
const jobReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_JOB":
      console.log("create job", action.job);
      return state;
    case "CREATE_JOB_ERROR":
      console.log("create job error", action.err);
      return state;
    default:
      return state;
  }
};
export default jobReducer;
