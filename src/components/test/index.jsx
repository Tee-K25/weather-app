import React from "react";
import useFetchHook from "../use-fetch-hook";

const Test = () => {
  const { data, errorMsg, loading } = useFetchHook(
    "https://api.openweathermap.org/data/2.5/weather?q=Nairobi&appid=fc4808a791e4074257e0377bdb26a2cc"
  );
  //   console.log(data);
  return <div>testing</div>;
};

export default Test;
