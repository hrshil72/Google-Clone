import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import "./SearchBar.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useContextValue } from "../context/Context";
import { actionTypes } from "../context/Reducer";

const SearchBar = ({ hideButtons = false }) => {
  let [{}, dispatch] = useContextValue();

  let [input, setInput] = useState("");
  let navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });

    {
      input === "" ? null : navigate("/result");
    }
  };

  return (
    <form className="search">
      <div className="search-input">
        <SearchIcon style={{ cursor: "pointer", color: "#9AA0A6" }} />
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
        />
        <div className="right-icons">
          <KeyboardVoiceIcon />
          <CameraAltIcon />
        </div>
      </div>

      {hideButtons ? (
        <div className="buttons-container hide-buttons">
          <Button type="submit" onClick={handleSearch} variant="outlined">
            Google Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className="buttons-container ">
          <Button type="submit" onClick={handleSearch} variant="outlined">
            Google Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      )}
    </form>
  );
};

export default SearchBar;
