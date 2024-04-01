import axios from "axios";

const request = async (method, url, data) => {
  if (method === "GET") {
    return await axios.get(`${url}`);
  } else if (method === "POST") {
    return await axios.post(`${url}`, data);
  }
};

export const getPopulationData = async () => {
  return request(
    "GET",
    "https://datausa.io/api/data?drilldowns=Nation&measures=Population"
  );
};
