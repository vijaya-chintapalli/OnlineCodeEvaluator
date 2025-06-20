// src/api.js
import axios from "axios";

const API_BASE = "http://localhost:5000/api"; // Change this if using deployed backend

export const fetchProblems = () => {
  return axios.get(`${API_BASE}/problems`);
};

export const submitCode = (code, problemId, customInput = "") => {
  return axios.post(`${API_BASE}/submit`, { code, problemId, customInput });
};
