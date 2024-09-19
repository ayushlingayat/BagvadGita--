import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import DescTitle from "../descTitle";
import ChCard from "./ChCard";
import { ChaptersListAPI } from "../../API/ChaptersListAPI";
import { chaptersList } from "../../assets/Interface";

const ChList: React.FC = () => {
  const [chaptersList, setChaptersList] = useState<chaptersList[]>([]);
  useEffect(() => {
    ChaptersListAPI.then((res) => {
      setChaptersList(res.data);
    }).catch((error) => {
      console.error(error);
    });
  }, []);
  return (
    <Container>
      <DescTitle titleHindi="अध्यायाः" titleEng="Chapters" />
      <Row>
        {chaptersList.map((item) => (
          <ChCard chapter={item} key={item.id} />
        ))}
      </Row>
    </Container>
  );
};

export default ChList;
