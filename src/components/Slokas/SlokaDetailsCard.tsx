import React, { useEffect } from "react";
import { SlokaDetailsType } from "../../assets/Interface";
import style from "./Sloka.module.css";
import { Nav, Tab } from "react-bootstrap";
import Sloka_translations from "./Sloka_translations";
import Sloka_Commenteries from "./Sloka_commentaries";

const SlokaDetailsCard: React.FC<{ Sloka: SlokaDetailsType | undefined }> = ({
  Sloka,
}) => {
  useEffect(() => {
    console.log(Sloka?.commentaries);
  }, [Sloka]);
  return (
    <div className="d-flex justify-content-center flex-column align-items-center">
      <div className="d-flex justify-content-center align-items-center flex-column">
        <h1 className={`text-center w-50 ${style.sloka_text}`}>
          {Sloka?.text}
        </h1>
        <span className="text-center fst-italic fs-3 w-50 my-2">
          <strong>Transliteration</strong>: "{Sloka?.transliteration}"
        </span>
        <div className={`${style.sloka_word_meanings} w-75 my-2`}>
          {" "}
          <span className="fs-7 fw-bold my-4">Meaning: </span>
          <span className="fw-semibold">{Sloka?.word_meanings}</span>
        </div>
      </div>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Nav variant="pills" className="flex-row w-100 mt-4" fill>
          <Nav.Item>
            <Nav.Link
              className={`${style.translation_btn}`}
              eventKey="Translations"
            >
              Translations
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="Commentries"
              className={`${style.translation_btn}`}
            >
              Commentries
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <Tab.Content>
          <Tab.Pane eventKey="Translations">
            <Sloka_translations translations={Sloka?.translations} />
          </Tab.Pane>
          <Tab.Pane eventKey="Commentries">
            <Sloka_Commenteries commenteries={Sloka?.commentaries} />
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </div>
  );
};

export default SlokaDetailsCard;
