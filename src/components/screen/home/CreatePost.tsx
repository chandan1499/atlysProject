import { useNavigate } from "react-router-dom";
import { Button } from "../../common/button/Button";
import "./homeStyle.css";

export const CreatePost = () => {
  const navigate = useNavigate();
  return (
    <div className="postContainer">
      <h1 className="postHeader">Create Post</h1>
      <textarea
        className="postInput"
        placeholder="How are you feeling today?"
      />
      <div className="postBtnContainer">
        <div className="postBtn">
          <Button text="Post" onClick={() => navigate('/login')} />
        </div>
      </div>
    </div>
  );
};
