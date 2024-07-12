import { Button } from "../../common/button/Button";
import "./homeStyle.css";

export const CreatePost = () => {
  return (
    <div className="postContainer">
      <h1 className="postHeader">Create Post</h1>
      <textarea
        className="postInput"
        placeholder="How are you feeling today?"
      ></textarea>
      <div className="postBtnContainer">
        <div className="postBtn">
          <Button text="Post" />
        </div>
      </div>
    </div>
  );
};
