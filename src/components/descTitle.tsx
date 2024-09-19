import madalaTitleImg from "../assets/mandala-topic-border.png";
import { Image } from "react-bootstrap";

const DescTitle: React.FC<{ titleHindi: string; titleEng: string }> = ({
  titleEng,
  titleHindi,
}) => {
  return (
    <div className="d-flex justify-content-center align-items-center m-4">
      <Image src={madalaTitleImg} className="mx-3" />
      <div className="d-flex flex-column text-center">
        <h1 className="mb-0">
          <strong>{titleHindi}</strong>
        </h1>
        <h4 className="mb-0">{titleEng}</h4>
      </div>
      <Image src={madalaTitleImg} className="mx-3" />{" "}
    </div>
  );
};

export default DescTitle;
