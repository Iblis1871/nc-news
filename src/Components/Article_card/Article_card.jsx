import React, { useEffect } from "react";
import { getArticles } from "../../utils/API";

const Article_card = () => {
  useEffect(() => {
    getArticles();
  }, []);

  return <div>Article_card</div>;
};

export default Article_card;
