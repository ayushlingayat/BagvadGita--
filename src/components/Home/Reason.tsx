import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import WhyImg from "../../assets/whyImage.jpg";
import DescTitle from "../descTitle";
import style from "./Home.module.css";
const Reason: React.FC = () => {
  return (
    <Container className={style.reasonBg}>
      <DescTitle titleHindi="किमर्थम्‌" titleEng="Why" />
      <Row>
        <Col sm={12} md={6} className="p-3">
          <p className={`${style.reasonParaStyle}`}>
            <b>Bhagavad Gita</b> offers guidance on overcoming self-doubt and
            fear by tapping into our inner strength and connecting with our true
            nature. It encourages us to recognize the eternal soul within us,
            which is beyond birth and death, and to approach challenges with
            courage and conviction.
          </p>
        </Col>
        <Col
          sm={12}
          md={6}
          className="d-flex justify-content-center align-items-center"
        >
          <Image src={WhyImg} rounded className="w-75 mb-3" />
        </Col>
      </Row>
    </Container>
  );
};

export default Reason;
