import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import sideImg from "../../assets/bhoomi.jpg";
import DescTitle from "../descTitle";
import style from "./Home.module.css";

const About: React.FC = () => {
  return (
    <Container className={style.aboutBg}>
      <DescTitle titleHindi="विषये" titleEng="About" />
      <Row>
        <Col
          sm={12}
          md={6}
          className="d-flex justify-content-center align-items-center"
        >
          <Image src={sideImg} rounded className="w-75" />
        </Col>
        <Col sm={12} md={6} className="p-3">
          <p className={style.aboutParaStyle}>
            <strong>Bhagavad Gita</strong> is set in a narrative framework of
            dialogue between the Pandava prince Arjuna and his charioteer guide
            Krishna, an avatar of Vishnu. Krishna counsels Arjuna to "fulfil his
            Kshatriya (warrior) duty" for the upholding of dharma. The
            Krishna–Arjuna dialogue covers a broad range of spiritual topics,
            touching upon moral and ethical dilemmas, and philosophical issues
            that go far beyond the war that Arjuna faces.The setting of the text
            in a battlefield has been interpreted as an allegory for the
            struggles of human life. Summarizing the Upanishadic conceptions of
            God, the Gita posits the existence of an individual self (Atman) and
            the supreme self (Brahman) within each being. Wondering if he should
            renounce the war, Arjuna seeks the counsel of Krishna, whose answers
            and discourse constitute the <strong>Bhagavad Gita</strong>.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
