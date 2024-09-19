import Ramayana from "../../API/Ramayana";
import RamayanStoryComp from "./RamayanStoryComp";

const Layout = () => {
  return (
    <>
      {Ramayana.length &&
        Ramayana.map((item) => <RamayanStoryComp Kanda={item} key={item.id} />)}
    </>
  );
};

export default Layout;
