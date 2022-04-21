import React from "react";
import { useState } from "react";
import { updateVotesAdd } from "../../utils/API";
import { Button } from "./Votes.styles";

const Votes = ({ votes, article_id }) => {
  const [vote, setVote] = useState(0);
  const [err, setErr] = useState(null);

  const voteUp = () => {
    setVote((currentVotes) => currentVotes + 1);
    updateVotesAdd(article_id).catch((err) => {
      setErr("unable to process, try again");
    });
  };

  const voteDown = () => {
    setVote((currentVotes) => currentVotes - 1);
    updateVotesAdd(article_id).catch((err) => {
      setErr("unable to process, try again");
    });
  };

  if (err)
    return (
      <p>
        "unable to process, try again"
        <br></br>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhvGMzrK0_ao_1OszEweY8GbIhIw6kHT43ew&usqp=CAU"
          alt="cat with pc keyboard on sofa"
        ></img>
      </p>
    );

  return (
    <div>
      <p>
        Total Votes: ⭐ {votes + vote}
        <Button
          onClick={() => {
            voteUp(1);
          }}
          disabled={vote > 0}
        >
          {" "}
          🔼{" "}
        </Button>
        <Button
          onClick={() => {
            voteDown(1);
          }}
          disabled={vote}
        >
          {" "}
          🔽{" "}
        </Button>
      </p>
    </div>
  );
};

export default Votes;
