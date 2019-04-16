import axios from "axios";

axios.defaults.baseURL = "https://47.112.96.227";

export const getProjectInfo = projectName => {
  return axios.get(`/github/project/${projectName}`);
};
