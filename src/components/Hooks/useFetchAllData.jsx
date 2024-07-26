import { useState, useEffect } from "react";
import axios from "axios";

const useFetchAllData = (endpoint) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      let allData = [];
      let url = endpoint;
      try {
        while (url) {
          const response = await axios.get(url);
          allData = allData.concat(response.data.results);
          url = response.data.next; // get the next page URL
        }
        setData(allData);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  return { data, loading, error };
};

export default useFetchAllData;
