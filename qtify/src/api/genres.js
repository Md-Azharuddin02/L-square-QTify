import axios from "axios";

const BASE_URL = "https://qtify-backend.labs.crio.do";

export const fetchGenres = async () => {
  const response = await axios.get(
    `${BASE_URL}/genres`
  );

  return response.data;
};