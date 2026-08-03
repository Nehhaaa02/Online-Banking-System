import API from "./api";

export const applyLoan = (data) =>
  API.post("/loan/apply", data);