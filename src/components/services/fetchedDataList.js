import axios from "axios";

const baseUrl =
  "https://healthycanadians.gc.ca/recall-alert-rappel-avis";

const getAll = () => {
  const request = axios.get(`${baseUrl}/api/recent/en`);
  return request.then((res) => res.data);
};


// const getById=(id)=>{
//   const request = 
// }
// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll };
