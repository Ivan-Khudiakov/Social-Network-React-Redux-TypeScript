import React from "react";
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostContainer";
import {ProfileType} from "../../redux/profile-reducer";

type PropsType = {
    profile: null | ProfileType
    status: string
    updateStatus: (status: string) => void
}

const Profile = (props: PropsType) => {
    return (
        <div className={s.profile}>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer/>
        </div>
    )
}
export default Profile;
