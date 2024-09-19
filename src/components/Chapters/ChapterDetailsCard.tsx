import React, { useState } from "react";
import { chapter } from "../../assets/Interface";
import style from "./Chapters.module.css";
import { Dropdown } from "react-bootstrap";

const ChapterDetailsCard: React.FC<{ chDetails: chapter | undefined }> = ({
  chDetails,
}) => {
  const [summaryLang, setSummaryLang] = useState<string>("English");
  return (
    <div className="d-flex justify-content-center flex-column align-items-center">
      <h1 className={`${style.chapter_slug} h1 text-center`}>
        {chDetails?.slug}
      </h1>
      <h1
        className={`${style.chapter_name_transliterated} text-center display-5`}
      >
        {chDetails?.name_transliterated}{" "}
        <span className="text-secondary ">
          {"("} nee: "{chDetails?.name_translated}"{")"}
        </span>
      </h1>
      <div className="mt-5 w-100">
        <div className="d-flex justify-content-between align-items-center">
          <h3>संक्षेपः (Summary)</h3>
          <Dropdown>
            <strong className="h4">Language: </strong>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              {summaryLang}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item
                onClick={() => {
                  setSummaryLang("English");
                }}
              >
                English
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  setSummaryLang("Hindi");
                }}
              >
                Hindi
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className={`${style.chapter_summary} w-100 p-3 my-3`}>
          <p className="lh-lg text-center fs-5 fst-italic">
            {summaryLang === "English" && chDetails?.chapter_summary}
            {summaryLang === "Hindi" && chDetails?.chapter_summary_hindi}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChapterDetailsCard;
