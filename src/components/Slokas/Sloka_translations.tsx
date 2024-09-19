import React from "react";
import { translations } from "../../assets/Interface";
import { Card } from "react-bootstrap";

const Sloka_translations: React.FC<{
  translations: translations[] | undefined;
}> = ({ translations }) => {
  return (
    <div className="container">
      <div className="row d-flex justify-content-center align-items-center">
        {translations?.length &&
          translations.map((item) => (
            <Card
              className="col-4 m-4 border border-0 shadow"
              style={{ width: "18rem", height: "fit-content" }}
              key={item.id}
            >
              <Card.Body className="d-flex flex-column justify-content-between align-items-center">
                <Card.Text className="text-center">
                  {item.description}
                </Card.Text>
                <Card.Title className="text-warning">
                  ~ {item.author_name}
                </Card.Title>
              </Card.Body>
            </Card>
          ))}
      </div>
    </div>
  );
};

export default Sloka_translations;
