import axios from "axios";

const API_URL = "http://localhost:3001/portfolioData"
const API_URL_USER = " https://portfolio-backend-op5p.onrender.com/api/v1/user/profile/portfolio"
const API_URL_SKILLS =  "https://portfolio-backend-op5p.onrender.com/api/v1/skills/getAll"
const API_URL_PROJECT = " https://portfolio-backend-op5p.onrender.com/api/v1/project/getall"



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

export const fetchSingleProjectData = async (id) => {
  try {
    const response =await axios.get(`https://portfolio-backend-op5p.onrender.com/api/v1/project/getSingleProject/${id}`);
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching data:",
      error.response ? error.response.data : error.message
    );
    throw new Error(error.message || "Error fetching data");
  }
};

