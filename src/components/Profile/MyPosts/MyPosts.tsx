import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {ActionsType, AddPostAC, PostType, UpdateNewPostTextAC} from "../../../redux/state";

export type MyPostPropsType = {
    posts: Array<PostType>
    textForNewPost: string
    dispatch:(action: ActionsType) => void
}


const MyPosts = (props: MyPostPropsType) => {
    const addPost = () => {
        props.dispatch(AddPostAC(props.textForNewPost))
    }
    const changeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.dispatch(UpdateNewPostTextAC(text))
    }

    return (
        <div className={s.item}>
            <div>
                <textarea value={props.textForNewPost} onChange={changeText}></textarea>
                <button onClick={addPost}>Add post</button>
            </div>
            <div>
                New Post
            </div>
            <Post posts={props.posts}/>
        </div>
    )
}
export default MyPosts;
