import { useMyContext } from "../../../ContextProvider";
import { Button } from "../../common/button/Button";
import "./homeStyle.css";
import { ShowPageEnum } from "./utils";

export const CreatePost = () => {
  const { setHomeState } = useMyContext();
  return (
    <div className="postContainer">
      <h1 className="postHeader">Create Post</h1>
      <textarea
        className="postInput"
        placeholder="How are you feeling today?"
      />
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
