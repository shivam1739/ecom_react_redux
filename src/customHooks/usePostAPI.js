import axios from "axios";
import { useEffect, useState } from "react";

const usePostAPI = (url, postData, header) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(url, postData);

        setData(response.data);
        setError(null);
      } catch (err) {
        setError(err);
      }
    };

    fetchData();
  }, [url, postData]);

  return { data, error };
};

export default usePostAPI;
