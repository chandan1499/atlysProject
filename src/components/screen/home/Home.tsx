import { CreatePost } from './CreatePost';
import './homeStyle.css'
import mockPostData from './mockData';
import { PostContainer } from './Post';

export const HomePage = () => {
    return <div className="homeContainer">
        <h1 className="userDetailTag">Hello</h1>
        <p className="profileSubHeader">How are you doing today? Would you like to share something with the community 🤗</p>

        <CreatePost />

        {mockPostData.map((post) => <PostContainer {...post} />)}
    </div>;
}