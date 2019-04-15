import axios from "axios";

axios.defaults.baseURL = "http://47.112.96.227:8080";

export const getProjectInfo = projectName => {
  return axios.get(`/github/project_info/${projectName}`);
};
