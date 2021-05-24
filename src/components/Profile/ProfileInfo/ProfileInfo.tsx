import React from "react";
import {ProfileType} from "../../../redux/profile-reducer";
import style from "./ProfileInfo.module.css";
import {Preloader} from "../../../common/Preloader/Preloader";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";

type PropsType = {
    profile: null | ProfileType
    status: string
    updateStatus: (status: string) => void
}

const ProfileInfo = (props: PropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <>
            <img className={style.avatar} src={props.profile?.photos.large} alt={"Avatar"}/>
            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
        </>
    )
}
export default ProfileInfo