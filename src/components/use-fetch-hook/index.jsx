import React, { useEffect, useState } from "react";

const useFetchHook = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  function fetchData() {
    setLoading(true);
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error:${res.status} - ${res.statusText}`);
        } else {
          return res.json();
        }
      })
      .then((data) => {
        if (data) {
          // console.log(data);
          setData(data);
          setLoading(false);
        }
      })
      .catch((error) => {
        setLoading(false);
        setErrorMsg(error.message);
      });
  }

  useEffect(() => {
    if (url) fetchData();
  }, [url]);

  return { data, loading, errorMsg };
};

export default useFetchHook;
