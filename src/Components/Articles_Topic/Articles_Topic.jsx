import React, { useState } from "react";
import { useEffect } from "react";
import { getTopics } from "../../utils/API";
import { Wrapper, Content } from "./Articles_Topic.styles";

const Articles_topic = () => {
  const [topics, setTopic] = useState([]);

  useEffect(() => {
    getTopics().then((topicsFromApi) => {
      console.log(topicsFromApi.topics);
      setTopic(topicsFromApi.topics);
    });
  }, []);
  return (
    <div>
      {topics.map((topic) => {
        return (
          <Wrapper>
            <Content>
              #{topic.slug}
              <br></br>
              {topic.description}
              <br></br>
              {/* RELATED ARTICLES GOES HERE */}
            </Content>
          </Wrapper>
        );
      })}
    </div>
  );
};

export default Articles_topic;
