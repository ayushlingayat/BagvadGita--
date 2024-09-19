import React from "react";
import { Card, Col, Image } from "react-bootstrap";
import style from "./Chapters.module.css";
import btnImg from "../../assets/clickBtnImg.png";
import { chaptersList } from "../../assets/Interface";
import { useNavigate } from "react-router-dom";

const ChCard: React.FC<{ chapter: chaptersList }> = ({ chapter }) => {
  const navigate = useNavigate();
  return (
    <Col sm={12} md={4}>
      <Card className={`${style.ChCard} bg-dark my-3 rounded-4`}>
        <Card.Link
          className="text-light "
          onClick={() => {
            navigate("/Chapter/" + chapter.chapter_number);
          }}
        >
          <Card.Img
            className="rounded-4"
            variant="top"
            src="https://i.pinimg.com/564x/3d/bd/32/3dbd32268049531dc3b7a185d9897706.jpg"
          />
          <Card.ImgOverlay className="d-flex flex-column justify-content-center align-items-center">
            <Image src={btnImg} />
            <div className={style.ChCardTextBg}>
              <Card.Title className="fs-3 fw-bold">{chapter.name}</Card.Title>
              <Card.Subtitle className="fs-4 my-2">
                {chapter.name_transliterated}
              </Card.Subtitle>
              <Card.Text className="fs-5 mb-2">
                {chapter.name_meaning}
              </Card.Text>
            </div>
            <Image src={btnImg} />
          </Card.ImgOverlay>
        </Card.Link>
      </Card>
    </Col>
  );
};

export default ChCard;
