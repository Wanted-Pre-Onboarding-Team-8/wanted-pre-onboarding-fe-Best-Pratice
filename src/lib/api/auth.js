import axios from "axios";
import baseAPI from ".";

export const loginAPI = (data, actions) => {
  const {
    pendingAction = () => {},
    fulfilledAction = () => {},
    rejectAction = () => {},
  } = actions;

  pendingAction();
  baseAPI
    .post("/auth/signin", data)
    .then((res) => {
      fulfilledAction(res.data);
    })
    .catch((err) => {
      authRejectAction(err, rejectAction);
    });
};

export const registerAPI = (data, actions) => {
  const {
    pendingAction = () => {},
    fulfilledAction = () => {},
    rejectAction = () => {},
  } = actions;

  pendingAction();
  baseAPI
    .post("/auth/signup", data)
    .then((res) => {
      fulfilledAction();
    })
    .catch((err) => {
      authRejectAction(err, rejectAction);
    });
};

export const authRejectAction = (err, redirectAction) => {
  if (axios.isAxiosError(err) && err.response) {
    redirectAction();
    window.alert((err.response?.data).message);
  }
};
