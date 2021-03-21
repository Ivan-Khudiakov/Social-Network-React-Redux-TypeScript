import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

export type ProfilePropsType = {
    profilePage: ProfilePageType
    changeNewText: (newText: string) => void
    addPost: (postText:string) => void
}


const Profile = (props:ProfilePropsType) => {

    return (
        <div className={s.profile}>
            <div>
                <img src='http://mebel69.org/08/239.jpg' alt='BG'/>
            </div>
            <ProfileInfo />
            <MyPosts posts={props.profilePage.posts} textForNewPost={props.profilePage.textForNewPost} addPost={props.addPost} changeNewText={props.changeNewText}/>

        </div>
    )
}
export default Profile;
