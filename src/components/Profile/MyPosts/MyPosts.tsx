import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostType} from "./MyPostContainer";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {TextArea} from "../../../common/FormsControls/FormsControls";

type MyPostPropsType = {
    posts: Array<PostType>
    addPost: (textForNewPost: string) => void
    isAuth: boolean
}

const maxLength = maxLengthCreator(10)

const AddPostForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={TextArea}
                   name={'textForNewPost'}
                   placeholder={'new Post'}
                   validate={[required, maxLength]}/>
            <button>Add post</button>
        </form>
    )
}
const AddPostFormRedux = reduxForm({form: 'addPostForm'})(AddPostForm)

const MyPosts = (props: MyPostPropsType) => {
    const addNewPost = (values: any) => {
        props.addPost(values.textForNewPost)
    }

    if (!props.isAuth) return <Redirect to={"/login"}/>
    return (
        <div className={s.item}>
            <h2>My posts</h2>
            <AddPostFormRedux onSubmit={addNewPost}/>
            <div>
                New Post
            </div>
            <Post posts={props.posts}/>
        </div>
    )
}
export default MyPosts;
