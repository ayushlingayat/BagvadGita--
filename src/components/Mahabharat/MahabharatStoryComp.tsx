import React from "react";
import DescTitle from "../descTitle";
import { MahabharatType } from "../../API/Mahabharat";

const MahabharatStoryComp: React.FC<{ Parav: MahabharatType }> = ({
  Parav,
}) => {
  return (
    <div>
      <DescTitle titleHindi="" titleEng={Parav.paravName} />
      <div className="d-flex justify-content-center align-items-center w-100 p-3">
        <span className="w-75 text-center lh-lg text-wrap ">{Parav.Story}</span>
      </div>
    </div>
  );
};

export default MahabharatStoryComp;
