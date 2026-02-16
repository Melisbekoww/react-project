import axios from "./axios";

//Запрос на бекенд по API
const API_KEY = import.meta.env.VITE_API_KEY; //доступ к глобальным переиенным в .env файле

export const fetchImages = async (search, page = 1) => {
  console.log(search);
  try {
    const { data } = await axios.get(
      `?key=${API_KEY}&q=${search}&image_type=photo$page=${page}&per_page=9`
    );
    return data;
  } catch (error) {
    console.error(`Error while fetching data:${error}`);
  }
};
