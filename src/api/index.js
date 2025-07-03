import axios from "axios";

const API_URL = "http://localhost:3001/portfolioData"
const API_URL_USER = " http://localhost:3000/api/v1/user/profile/portfolio"
const API_URL_SKILLS =  "http://localhost:3000/api/v1/skills/getAll"
const API_URL_PROJECT = " http://localhost:3000/api/v1/project/getall"

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

export const fetchUserData = async () => {
  try {
    const response =await axios.get(API_URL_USER);
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching data:",
      error.response ? error.response.data : error.message
    );
    throw new Error(error.message || "Error fetching data");
  }
};


export const fetchSkillsData = async () => {
  try {
    const response =await axios.get(API_URL_SKILLS);
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching data:",
      error.response ? error.response.data : error.message
    );
    throw new Error(error.message || "Error fetching data");
  }
};


export const fetchProjectData = async () => {
  try {
    const response =await axios.get(API_URL_PROJECT);
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching data:",
      error.response ? error.response.data : error.message
    );
    throw new Error(error.message || "Error fetching data");
  }
};

