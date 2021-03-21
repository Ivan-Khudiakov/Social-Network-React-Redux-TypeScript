import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostType} from "../../../redux/state";

export type MyPostPropsType = {
    posts: Array<PostType>
    textForNewPost: string
    addPost: (postText: string) => void
    changeNewText: (newText: string) => void
}

const MyPosts = (props:MyPostPropsType) => {
    const addPost = () => {
        props.addPost(props.textForNewPost)
    }
    const changeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changeNewText(e.currentTarget.value)
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
