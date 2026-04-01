import axios from "axios";


const API_URL = import.meta.env.VITE_API_URL;
const API_URL_USER = import.meta.env.VITE_API_URL_USER;
const API_URL_SKILLS = import.meta.env.VITE_API_URL_SKILLS;
const API_URL_PROJECT = import.meta.env.VITE_API_URL_PROJECT;
const API_URL_SINGLE_PROJECT = import.meta.env.VITE_API_URL_SINGLE_PROJECT;




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
    const response =await axios.get(`${API_URL_SINGLE_PROJECT}/${id}`);
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching data:",
      error.response ? error.response.data : error.message
    );
    throw new Error(error.message || "Error fetching data");
  }
};

