import axios from "axios";

const API_URL = "http://localhost:3001/portfolioData"
export const fetchData = async () => {
  try {
    const response =await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching data:",
      error.response ? error.response.data : error.message
    );
    throw new Error(error.message || "Error fetching data");
  }
};
