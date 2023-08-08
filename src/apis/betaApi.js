import axios from "axios";

const ROUTE = "beta";

const betaInstance = axios.create({
  baseURL: "https://develop.unieum.kr:4000/api",
  headers: {
    AccessControlAllowOrigin: "*",
  },
  withCredentials: true,
});

const post3TestGeneration = async (formData) => {
  return await betaInstance.post(`${ROUTE}/3-test-generation`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

const postSurvey = async (answer) => {
  return await betaInstance.post(`${ROUTE}/survey`, answer, {
    headers: { "Content-Type": "application/json" },
  });
};

export const betaApi = {
  post3TestGeneration,
  postSurvey,
};
