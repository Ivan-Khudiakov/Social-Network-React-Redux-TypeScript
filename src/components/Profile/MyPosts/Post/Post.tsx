import React from "react";
import s from './MyPosts.module.css'

const MyPosts = () => {
    return (
        <div>
            My Posts
            <div>
                New Post
            </div>
            <div>
                <div className={s.item}>
                    Post 1
                </div>
                <div>
                    Post 2
                </div>
            </div>
        </div>
    )
}
export default MyPosts;
