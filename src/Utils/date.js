import moment from "moment";

// eslint-disable-next-line import/prefer-default-export
export const formatDate = (date) => {
  return moment(date).format("YYYY-MM-DD");
};

export const formatTime = (date) => {
  const t = new Date(date);
  return t.toLocaleTimeString();
};

export const formatDateTime = (date) => {
  return moment(date).format();
};
