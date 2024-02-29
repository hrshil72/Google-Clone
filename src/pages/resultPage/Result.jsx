import React from "react";
import "./Result.css";
import { useContextValue } from "../../context/Context";

const Result = () => {
  const [{ term }, dispatch] = useContextValue();

  return (
    <div className="searchPage">
      <div className="searchPage-header">
        <h1>{term}</h1>
      </div>
      <div className="searchPage-results"></div>
    </div>
  );
};

export default Result;
