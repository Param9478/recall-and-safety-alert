import axios from "axios";

const baseUrl = "https://healthycanadians.gc.ca/recall-alert-rappel-avis";

const getAll = (dataLang) => {
  const request = axios.get(`${baseUrl}/api/recent/${dataLang}`);
  return request.then((res) => res.data);
};

const getById = (id, dataLang) => {
  const request = axios.get(`${baseUrl}/api/${id}/${dataLang}`);
  return request.then((res) => res.data);
};
// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, getById };
