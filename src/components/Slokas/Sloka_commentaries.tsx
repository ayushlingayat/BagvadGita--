import React from "react";
import { commentries } from "../../assets/Interface";
import { Card } from "react-bootstrap";

const Sloka_Commenteries: React.FC<{
  commenteries: commentries[] | undefined;
}> = ({ commenteries }) => {
  return (
    <div className="container">
      <div className="row d-flex justify-content-center align-items-center">
        {commenteries?.length &&
          commenteries.map((item) => (
            <Card
              className="m-4 border border-0 shadow"
              style={{ width: "fit-content", height: "fit-content" }}
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

export default Sloka_Commenteries;
