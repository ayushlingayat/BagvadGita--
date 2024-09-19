import axios from "axios";

const SlokaListAPI = (chaNumber: number | undefined) =>
  axios.get(
    `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${chaNumber}/verses/`,
    {
      headers: {
        "X-RapidAPI-Key": "20d12eeafamsh3b87ee21e734f73p1e9bcajsn962ca1731e27",
        "X-RapidAPI-Host": "bhagavad-gita3.p.rapidapi.com",
      },
    }
  );

const SingleSlokaAPI = (
  chaNumber: string | undefined,
  slokaNumber: string | undefined
) =>
  axios.get(
    `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${chaNumber}/verses/${slokaNumber}/`,
    {
      headers: {
        "X-RapidAPI-Key": "20d12eeafamsh3b87ee21e734f73p1e9bcajsn962ca1731e27",
        "X-RapidAPI-Host": "bhagavad-gita3.p.rapidapi.com",
      },
    }
  );

export { SlokaListAPI, SingleSlokaAPI };
