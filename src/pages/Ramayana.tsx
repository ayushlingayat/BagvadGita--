import React from "react";
import Title from "../components/TitleComp";
import Layout from "../components/Ramayana/Layout";
import StoryEnd from "../components/StoryEnd";
import Conclusion from "../components/Ramayana/Conclusion";

const Ramayana: React.FC = () => {
  return (
    <>
      {" "}
      <Title
        bgurl="https://i.pinimg.com/736x/e9/75/a2/e975a2d799dc14b7f0accb56cb12def9.jpg"
        title="रामायनम् "
        subtitle="Journey of Rama"
      />
      <Layout />
      <StoryEnd />
      <Conclusion />
    </>
  );
};

export default Ramayana;
