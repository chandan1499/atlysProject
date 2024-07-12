import { calculateTimeAgo, PostContainerProps } from "./utils";

export const PostContainer = ({proficSrc, userName, postTime, postContent, commentsCount}: PostContainerProps) => {
    return (
        <div className="postListContainer">
            <div className="userInfoContainer">
                <img className="userImg" src={proficSrc} alt="profilePicture" />
                <div>
                    <h3 className="text-primaryText">{userName}</h3>
                    <p className="text-secondaryText">{calculateTimeAgo(postTime)}</p>
                </div>
            </div>
            <div className="postInput">
                <p>{postContent}</p>
            </div>
            <p className="commentsBox">{`${commentsCount} ${commentsCount <= 1 ? 'comment' : 'comments'}`}</p>
        </div>
    );
}