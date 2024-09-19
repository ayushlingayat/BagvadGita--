import madalaTitleImg from "../assets/mandala-end.png";
import { Image } from "react-bootstrap";
const StoryEnd = () => {
  return (
    <div className="d-flex justify-content-center align-items-center m-4">
      <Image src={madalaTitleImg} className="mx-3" />
      <div className="d-flex flex-column text-center">
        <h1 className="mb-0">
          <strong>समाप्ति</strong>
        </h1>
        <h4 className="mb-0">END</h4>
      </div>
      <Image src={madalaTitleImg} className="mx-3" />{" "}
    </div>
  );
};

export default StoryEnd;
