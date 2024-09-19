import axios from "axios";

const ChaptersListAPI = axios.get(
  "https://bhagavad-gita3.p.rapidapi.com/v2/chapters/",
  {
    headers: {
      "X-RapidAPI-Key": "20d12eeafamsh3b87ee21e734f73p1e9bcajsn962ca1731e27",
      "X-RapidAPI-Host": "bhagavad-gita3.p.rapidapi.com",
    },
  }
);

const ChapterAPI = (chaNumber: string | undefined) =>
  axios.get(`https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${chaNumber}/`, {
    headers: {
      "X-RapidAPI-Key": "20d12eeafamsh3b87ee21e734f73p1e9bcajsn962ca1731e27",
      "X-RapidAPI-Host": "bhagavad-gita3.p.rapidapi.com",
    },
  });

export { ChaptersListAPI, ChapterAPI };
