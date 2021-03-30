import React from "react";
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsType, ProfilePageType} from "../../redux/store";
import MyPostsContainer from "./MyPosts/MyPostContainer";

export type ProfilePropsType = {
    profilePage: ProfilePageType
    dispatch:(action: ActionsType) => void
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.profile}>
            <div>
                <img src='http://mebel69.org/08/239.jpg' alt='BG'/>
            </div>
            <ProfileInfo/>
            <MyPostsContainer posts={props.profilePage.posts} textForNewPost={props.profilePage.textForNewPost}
                     dispatch={props.dispatch}/>
        </div>
    )
}
export default Profile;
