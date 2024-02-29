import { useEffect, useState } from "react";
import { API_KEY, CONTEXT_KEY } from "../constants";

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const data = await fetch(
      `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
    );
    const result = await data.json();
    console.log(result);
    setData(result);
  };

  useEffect(() => {
    fetchData();
  }, [term]);

  return { data };
};

export default useGoogleSearch;
