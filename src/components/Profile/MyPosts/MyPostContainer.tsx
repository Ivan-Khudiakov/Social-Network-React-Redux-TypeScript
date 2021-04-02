import {RootStateType} from "../../../redux/store";
import {AddPostAC, UpdateNewPostTextAC} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";


const mapStateToProps = (state: RootStateType) => {
    return {
        posts: state.profilePage.posts,
        textForNewPost: state.profilePage.textForNewPost
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addPost: () => {
            dispatch(AddPostAC())
        },
        changeText: (text: string) => {
            dispatch(UpdateNewPostTextAC(text))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer;
