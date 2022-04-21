import React from "react";
import { useState } from "react";
import { updateVotesAdd, updateVotesDec } from "../../utils/API";
import { Button } from "./Votes.styles";

const Votes = ({ votes, article_id }) => {
  const [vote, setVote] = useState(0);

  const voteUp = () => {
    setVote((currentVotes) => currentVotes + 1);
    updateVotesAdd(article_id).catch();
  };

  const voteDown = () => {
    setVote((currentVotes) => currentVotes - 1);
    updateVotesDec(article_id).catch();
  };

  console.log(vote, "<<vote", votes, "<<votes");
  return (
    <div>
      <p>
        Total Votes: {votes + vote}
        <Button onClick={voteUp}> 🔼 </Button>
        <Button onClick={voteDown}> 🔽 </Button>
      </p>
    </div>
  );
};

export default Votes;
