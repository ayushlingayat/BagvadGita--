import React from "react";
import { Card } from "react-bootstrap";
import style from "./Sloka.module.css";
import { SlokasList } from "../../assets/Interface";
import { useNavigate } from "react-router-dom";
const SlokaCard: React.FC<{ sloka: SlokasList }> = ({ sloka }) => {
  const navigate = useNavigate();
  return (
    <Card className={`${style.slokaCard} my-3`}>
      <Card.Link
        className="text-dark text-decoration-none"
        onClick={() => {
          navigate(
            "/Chapter/" + sloka.chapter_number + "/Sloka/" + sloka.verse_number
          );
        }}
      >
        <Card.Header
          className={`${style.sloka_card_header} text-center fw-bold`}
        >
          {sloka.slug}
        </Card.Header>
        <Card.Body className={`${style.sloka_card_body} text-center`}>
          <Card.Text>{sloka.text}</Card.Text>
        </Card.Body>
      </Card.Link>
    </Card>
  );
};

export default SlokaCard;
