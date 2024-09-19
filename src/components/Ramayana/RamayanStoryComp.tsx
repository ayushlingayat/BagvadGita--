import React from "react";
import { RamayanaType } from "../../API/Ramayana";
import DescTitle from "../descTitle";

const RamayanStoryComp: React.FC<{ Kanda: RamayanaType }> = ({ Kanda }) => {
  return (
    <div>
      <DescTitle titleHindi="" titleEng={Kanda.Kanada} />
      <div className="d-flex justify-content-center align-items-center w-100 p-3">
        <span className="w-75 text-center lh-lg text-wrap ">{Kanda.Story}</span>
      </div>
    </div>
  );
};

export default RamayanStoryComp;
