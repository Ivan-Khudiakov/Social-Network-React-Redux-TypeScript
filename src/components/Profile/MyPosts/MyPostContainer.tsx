import {addPost} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppRootStateType} from "../../../redux/redux-store";


export type PostType = {
    id: number
    message: string
    likes: number
}
export type mapStateToPropsType = {
    posts: Array<PostType>
    isAuth: boolean
}

const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        isAuth: state.auth.isAuth
    }
}

const MyPostsContainer = connect(mapStateToProps, {addPost})(MyPosts)
export default MyPostsContainer;
