import React from "react";
import Title from "../components/TitleComp";
import Layout from "../components/Mahabharat/Layout";
import StoryEnd from "../components/StoryEnd";
import Conclusion from "../components/Mahabharat/Conclusion";

const Mahabharat: React.FC = () => {
  return (
    <>
      {" "}
      <Title
        bgurl="https://wallpapercave.com/wp/wp6480429.jpg"
        title="महाभारत"
        subtitle="The Battle of Kurukshetra"
      />
      <Layout />
      <StoryEnd />
      <Conclusion />
    </>
  );
};

export default Mahabharat;
