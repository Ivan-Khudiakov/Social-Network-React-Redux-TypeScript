import React from "react";
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostContainer";

const Profile = () => {
    return (
        <div className={s.profile}>
            <div>
                <img src='http://mebel69.org/08/239.jpg' alt='BG'/>
            </div>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    )
}
export default Profile;
