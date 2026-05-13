import axios from "axios";

const BASE_URL = "https://qtify-backend.labs.crio.do";

export const fetchSongs = async () => {
  const response = await axios.get(
    `${BASE_URL}/songs`
  );

  return response.data;
};