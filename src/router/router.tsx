import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import Chapter from "../pages/Chapter";
import Sloka from "../pages/Sloka";
import Mahabharat from "../pages/Mahabharat";
import Ramayana from "../pages/Ramayana";
import ChapterDetails from "../components/Chapters/ChapterDetails";
import SlokaDetails from "../components/Slokas/SlokaDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Chapter",
        element: <Chapter />,
      },
      {
        path: "/Chapter/:chapter_number",
        element: <ChapterDetails />,
      },
      {
        path: "/Sloka",
        element: <Sloka />,
      },
      {
        path: "/Chapter/:chapter_number/Sloka/:verse_number",
        element: <SlokaDetails />,
      },
      {
        path: "/Mahabharat",
        element: <Mahabharat />,
      },
      {
        path: "/Ramayan",
        element: <Ramayana />,
      },
    ],
  },
]);

export default router;
