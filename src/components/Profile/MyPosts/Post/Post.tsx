import React from "react";
import s from './Post.module.css'
import {PostType} from '../../../../redux/state'


type PostsPropsType = {
    posts: Array<PostType>
}

const Post = (props: PostsPropsType) => {
    return (
        <div className={s.item}>
            {
                props.posts.map(p =>
                    <div className={s.post} key={p.id}>
                        <img src='https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png'
                             alt='avatar'/>
                        <span>{p.message}</span>
                        <div>
                            <span>{p.likes} like</span>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
export default Post;
