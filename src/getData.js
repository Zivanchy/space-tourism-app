import axios from 'axios';

const getData = async (url) => {
  const response = await axios.get(url);
  const data = await response.data;

  return data;
};

export default getData;
