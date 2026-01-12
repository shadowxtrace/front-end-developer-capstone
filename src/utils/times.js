// src/utils/times.js

const fallbackTimes = ["17:00", "18:00", "19:00", "20:00", "21:00"];

const getTimesFromAPI = (date) => {
  // api.js exposes fetchAPI globally on window
  if (typeof window !== "undefined" && typeof window.fetchAPI === "function") {
    return window.fetchAPI(date);
  }
  return fallbackTimes;
};

export const initializeTimes = () => {
  const today = new Date();
  return getTimesFromAPI(today);
};

export const updateTimes = (state, action) => {
  // action = selected date string or Date
  const date = action instanceof Date ? action : new Date(action);
  return getTimesFromAPI(date);
};
