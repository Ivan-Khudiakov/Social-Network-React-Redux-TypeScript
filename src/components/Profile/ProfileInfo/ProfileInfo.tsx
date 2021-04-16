import React from "react";
import {ProfileType} from "../../../redux/profileReducer";
import style from "./ProfileInfo.module.css";
import {Preloader} from "../../../common/Preloader/Preloader";

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
        </>
    )
}
export default ProfileInfo