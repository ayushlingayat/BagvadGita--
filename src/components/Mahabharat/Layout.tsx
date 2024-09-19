import Mahabharat from "../../API/Mahabharat";
import MahabharatStoryComp from "./MahabharatStoryComp";

const Layout = () => {
  return (
    <>
      {Mahabharat.length &&
        Mahabharat.map((item) => (
          <MahabharatStoryComp Parav={item} key={item.id} />
        ))}
    </>
  );
};

export default Layout;
