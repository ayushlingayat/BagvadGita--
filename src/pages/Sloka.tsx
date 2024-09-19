import React from "react";
import Title from "../components/TitleComp";
import SlokaDisplayList from "../components/Slokas/SlokaDisplayList";

const Sloka: React.FC = () => {
  return (
    <>
      <Title
        bgurl="https://i.pinimg.com/564x/1a/00/3f/1a003fd21dc1db71e2b34075374da71f.jpg"
        title="श्लोकाः"
        subtitle="Verses"
      />
      <SlokaDisplayList />
    </>
  );
};

export default Sloka;
