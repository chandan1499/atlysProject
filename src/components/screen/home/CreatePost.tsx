import { useState } from "react";
import { useMyContext } from "../../../ContextProvider";
import { Button } from "../../common/button/Button";
import "./homeStyle.css";
import { ReactionsList } from "./ReactionsList";
import { ShowPageEnum } from "./utils";

export const CreatePost = () => {
  const { setHomeState } = useMyContext();
  const [selectedReaction, setSelectedReaction] = useState<string>("💬");
  return (
    <div className="postContainer">
      <h1 className="postHeader">Create Post</h1>
      <div className="postInfoBox">
        <div className="tooltipContainer group">
          <div className="reactionBox">{selectedReaction}</div>
          <div className="tooltip">
            <ReactionsList onClick={setSelectedReaction} />
          </div>
        </div>
        <textarea
          className="textAreaInput"
          placeholder="How are you feeling today?"
        />
      </div>
      <div className="postBtnContainer">
        <div className="postBtn">
          <Button
            text="Post"
            onClick={() => {
              // If not logged in
              setHomeState(ShowPageEnum.LOGIN);
              // else create post
            }}
          />
        </div>
      </div>
    </div>
  );
};
