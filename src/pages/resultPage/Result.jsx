import React from "react";
import "./Result.css";
import { useContextValue } from "../../context/Context";
import useGoogleSearch from "../../hooks/useGoogleSearch";
import Response from "../../Response";
import { Link } from "react-router-dom";
import SearchBar from "../../components/SearchBar";

const Result = () => {
  const [{ term }, dispatch] = useContextValue();
  const { data } = useGoogleSearch(term);

  // const data = Response;
  // console.log(data);

  return (
    <div className="searchPage">
      <div className="searchPage-header">
        <Link to="/">
          <img src="https://w7.pngwing.com/pngs/523/198/png-transparent-google-logo-google-search-google-play-google-text-logo-number.png" />
        </Link>
        <div className="searchBar-headerBody">
          <SearchBar hideButtons />
          <div className="searchBar-options">
            <Link>Video</Link>
            <Link>Download</Link>
            <Link>Images</Link>
            <Link>News</Link>
            <Link>Shopping</Link>
            <Link>Books</Link>
            <Link>Maps</Link>
            <Link>Flights</Link>
            <Link>Finance</Link>
          </div>
        </div>
      </div>

      {term && (
        <div className="searchPage-results">
          <div className="searchPage-resultsCount">
            <p>
              About {data?.searchInformation.formattedTotalResults} results (
              {data?.searchInformation.formattedSearchTime} seconds) for {term}
            </p>
          </div>

          {data?.items.map((item, index) => {
            return (
              <div key={index} className="searchPage-result">
                <a href={item.link}>
                  {item.pagemap?.cse_image?.length > 0 &&
                    item.pagemap?.cse_image[0].src && (
                      <img
                        className="searchPage-resultImage"
                        src={
                          item.pagemap?.cse_image?.length > 0 &&
                          item.pagemap?.cse_image[0].src
                        }
                      />
                    )}

                  {item.displayLink}
                </a>
                <a href={item.link} className="searchPage-result-Title">
                  <h2>{item.title}</h2>
                </a>
                <p className="searchPage-result-Snippet">{item.snippet}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Result;
