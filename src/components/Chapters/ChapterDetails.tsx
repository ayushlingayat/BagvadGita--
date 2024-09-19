import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ChapterAPI } from "../../API/ChaptersListAPI";
import { chapter } from "../../assets/Interface";
import { Button, Container, Spinner } from "react-bootstrap";
import Title from "../TitleComp";
import ChapterDetailsCard from "./ChapterDetailsCard";

const ChapterDetails: React.FC = () => {
  const [chDetails, setchDetails] = useState<chapter>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const { chapter_number } = useParams();
  useEffect(() => {
    setIsLoading(true);
    ChapterAPI(chapter_number)
      .then((res) => {
        setchDetails(res.data);
        console.log(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.error(error);
      });
  }, [chapter_number]);
  return (
    <>
      <Title
        bgurl="https://i.pinimg.com/564x/27/93/ec/2793ece3abee6ad07f6bca552530b164.jpg"
        title={chDetails?.name}
        subtitle={chDetails?.name_meaning}
      />
      <Container>
        {" "}
        <div className="d-flex justify-content-between align-items-center">
          <Button
            onClick={() => {
              if (chapter_number === "1") {
                navigate("/Chapter");
              } else {
                const Next_Chapter = Number(chapter_number) - 1;
                navigate("/Chapter/" + Next_Chapter);
              }
            }}
            className="btn btn-outline-warning ms-mt-3"
            variant="light"
          >
            {chapter_number === "1" ? "Back to Chapters" : "Back"}
          </Button>
          <Button
            onClick={() => {
              if (chapter_number === "18") {
                navigate("/Chapter/" + "1");
              } else {
                const Next_Chapter = Number(chapter_number) + 1;
                navigate("/Chapter/" + Next_Chapter);
              }
            }}
            className="btn btn-outline-warning ms-mt-3"
            variant="light"
          >
            {" "}
            {chapter_number === "18" ? "Back to Ch 1" : "Next"}
          </Button>
        </div>
        {isLoading ? (
          <div className="d-flex justify-content-center align-items-center">
            {" "}
            <Spinner animation="grow" variant="warning" />
          </div>
        ) : (
          <ChapterDetailsCard chDetails={chDetails} />
        )}
      </Container>
    </>
  );
};

export default ChapterDetails;
