import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import "./SearchBar.css";
import { Button } from "@mui/material";

const SearchBar = () => {
  return (
    <div className="search">
      <div className="search-input">
        <SearchIcon style={{ cursor: "pointer", color: "#9AA0A6" }} />
        <input type="text" />
        <div className="right-icons">
          <KeyboardVoiceIcon />
          <CameraAltIcon />
        </div>
      </div>
      <div className="buttons-container">
        <Button variant="outlined">Google Search</Button>
        <Button variant="outlined">I'm Feeling Lucky</Button>
      </div>
    </div>
  );
};

export default SearchBar;
