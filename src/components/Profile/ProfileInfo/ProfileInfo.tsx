import React from "react";
import {ProfileType} from "../../../redux/profile-reducer";
import style from "./ProfileInfo.module.css";
import {Preloader} from "../../../common/Preloader/Preloader";
import {ProfileStatus} from "./ProfileStatus";

type PropsType = {
    profile: null | ProfileType
}

const ProfileInfo = (props: PropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <>
            <img className={style.avatar} src={props.profile?.photos.large} alt={"Avatar"}/>
            <ProfileStatus status={"hello my friends"}/>
        </>
    )
}
export default ProfileInfo