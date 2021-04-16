import React from "react";
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostContainer";
import {ProfileType} from "../../redux/profileReducer";

type PropsType = {
    profile: null | ProfileType
}

const Profile = (props: PropsType) => {
    return (
        <div className={s.profile}>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}
export default Profile;
