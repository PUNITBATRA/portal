export const createJob = (job) => {
  return (dispatch, getState, { getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore
      .collection("jobs")
      .add({
        ...job,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorId,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({ type: "CREATE_JOB", job });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_JOB_ERROR", err });
      });
  };
};
