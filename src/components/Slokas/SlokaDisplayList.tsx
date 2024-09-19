import React, { useEffect, useState } from "react";
import { Container, Dropdown, Spinner } from "react-bootstrap";
import DescTitle from "../descTitle";
import { SlokasList, chaptersList } from "../../assets/Interface";
import { ChaptersListAPI } from "../../API/ChaptersListAPI";
import { SlokaListAPI } from "../../API/SlokasAPI";
import SlokaCard from "./SlokaCard";

const SlokaDisplayList: React.FC = () => {
  const [chaptersList, setChaptersList] = useState<chaptersList[]>([]);
  const [verseList, setVerseList] = useState<SlokasList[]>([]);
  const [chapterVerse, setChapterVerse] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    ChaptersListAPI.then((res) => {
      setChaptersList(res.data);
    }).catch((error) => {
      console.error(error);
    });

    setIsLoading(true);
    SlokaListAPI(chapterVerse)
      .then((res) => {
        console.log(res.data);
        setVerseList(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.error(error);
      });
  }, [chapterVerse]);

  // useEffect(() => {

  // }, [chapterVerse]);

  return (
    <Container className="d-flex justify-content-center align-items-center flex-column">
      <DescTitle titleHindi="श्लोकाः" titleEng="Verses" />
      <span className="h3 text-center">
        Select the Chapter of which you want the verses:{" "}
      </span>
      <Dropdown>
        <Dropdown.Toggle
          className="fw-bold"
          variant="warning"
          id="dropdown-basic"
        >
          Chapter {chapterVerse}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {chaptersList.length > 0 &&
            chaptersList.map((item) => (
              <Dropdown.Item
                key={item.id}
                onClick={() => {
                  setChapterVerse(item.chapter_number);
                }}
              >
                Chapter {item.chapter_number}
              </Dropdown.Item>
            ))}
        </Dropdown.Menu>
      </Dropdown>
      {isLoading ? (
        <div className="my-3 d-flex justify-content-center align-items-center">
          {" "}
          <Spinner animation="border" variant="warning" />
        </div>
      ) : (
        verseList.map((item) => <SlokaCard sloka={item} key={item.id} />)
      )}
    </Container>
  );
};

export default SlokaDisplayList;
