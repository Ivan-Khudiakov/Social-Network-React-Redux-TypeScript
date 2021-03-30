import {ActionsType, PostType} from "../../../redux/store";
import {AddPostAC, UpdateNewPostTextAC} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

type MyPostPropsType = {
    posts: Array<PostType>
    textForNewPost: string
    dispatch:(action: ActionsType) => void
}

const MyPostsContainer = (props: MyPostPropsType) => {

    const addPost = () => {
        props.dispatch(AddPostAC (props.textForNewPost))
    }
    const changeText = (text: string) => {
        props.dispatch(UpdateNewPostTextAC(text))
    }

    return (
        <MyPosts updateNewPostText={changeText} addPost={addPost} posts={props.posts} textForNewPost={props.textForNewPost}/>
    )
}
export default MyPostsContainer;
