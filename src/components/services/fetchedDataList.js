import axios from "axios";

const baseUrl =
  "https://healthycanadians.gc.ca/recall-alert-rappel-avis/api/recent/en";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((res) => res.data);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll };
