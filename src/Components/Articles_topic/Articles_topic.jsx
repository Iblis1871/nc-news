import React, { useState } from "react";
import { useEffect } from "react";
import { getTopics } from "../../utils/API";

const Articles_topic = () => {
  const [topic, setTopic] = useState([]);

  useEffect(() => {
    getTopics().then((topicsFromApi) => {
      console.log(topicsFromApi);
    });
  }, []);
  return <div>Articles_topic</div>;
};

export default Articles_topic;
