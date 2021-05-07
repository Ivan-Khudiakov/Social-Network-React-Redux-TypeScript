import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostType} from "./MyPostContainer";
import {Redirect} from "react-router-dom";

type MyPostPropsType = {
    posts: Array<PostType>
    textForNewPost: string
    updateNewPostText: (textForNewPost: string) => void
    addPost: () => void
    isAuth: boolean
}


const MyPosts = (props: MyPostPropsType) => {
    const addPost = () => {
        props.addPost()
    }
    const changeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.updateNewPostText(text)
    }

    if (!props.isAuth) return <Redirect to={"/login"}/>
    return (
        <div className={s.item}>
            <div>
                <h2>My posts</h2>
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
