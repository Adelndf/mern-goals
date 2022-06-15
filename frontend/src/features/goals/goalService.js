import axios from "axios";

const API_URL = "/api/goals/";

const create = async (goalsData, token) => {
  const config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  const res = await axios.post(API_URL, goalsData, config);
  return res.data;
};

const getGoals = async (token) => {
  const config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  const res = await axios.get(API_URL, config);
  return res.data;
};

const goalService = {
  create,
  getGoals,
};

export default goalService;
