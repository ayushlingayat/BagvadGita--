import React from "react";
import Title from "../components/TitleComp";
import ChList from "../components/Chapters/ChList";

const Chapter: React.FC = () => {
  return (
    <>
      <Title
        bgurl="https://i.pinimg.com/564x/60/2f/9b/602f9b3122ce6a0e2c09a31072323612.jpg"
        title="अध्यायाः"
        subtitle="Chapters"
      />
      <ChList />
    </>
  );
};

export default Chapter;
