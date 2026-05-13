import axios from "axios";

const BASE_URL = "https://qtify-backend.labs.crio.do";

export const fetchTopAlbums = async () => {
  const response = await axios.get(
    `${BASE_URL}/albums/top`
  );

  return response.data;
};

export const fetchNewAlbums = async () => {
  const response = await axios.get(
    `${BASE_URL}/albums/new`
  );

  return response.data;
};