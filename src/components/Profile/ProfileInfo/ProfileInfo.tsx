import React, {ChangeEvent} from "react";
import {ProfileType} from "../../../redux/profile-reducer";
import styles from "./ProfileInfo.module.css";
import {Preloader} from "../../../common/Preloader/Preloader";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/ava.jpg";

type PropsType = {
    profile: null | ProfileType
    status: string
    updateStatus: (status: string) => void
    savePhoto:(file: File) => void
    isOwner: boolean
}

export const ProfileInfo = (props: PropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    return <>
        <img className={styles.avatar} src={props.profile.photos?.large || userPhoto} alt={"Avatar"}/>
        {!props.isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
    </>
}
