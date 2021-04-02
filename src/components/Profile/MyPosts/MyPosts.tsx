import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostType} from "../../../redux/store";


type MyPostPropsType = {
    posts: Array<PostType>
    changeText: (text: string) => void
    addPost: () => void
    textForNewPost: string
}


const MyPosts = (props: MyPostPropsType) => {
    const addPost = () => {
        props.addPost()
    }
    const changeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.changeText(text)
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
