import {addPost, updateNewPostText} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppRootStateType} from "../../../redux/redux-store";


export type PostType = {
    id: number
    message: string
    likes: number
}
export type mapStateToPropsType = {
    textForNewPost: string
    posts: Array<PostType>
    isAuth: boolean
}

const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        textForNewPost: state.profilePage.textForNewPost,
        isAuth: state.auth.isAuth
    }
}

const MyPostsContainer = connect(mapStateToProps, {addPost, updateNewPostText })(MyPosts)
export default MyPostsContainer;
