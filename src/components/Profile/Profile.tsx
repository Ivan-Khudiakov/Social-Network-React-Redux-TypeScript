import React from "react";
import s from './Profile.module.css'

const Profile = () => {
    return (
        <div className={s.profile}>
            <div>
                <img src='https://cdn.getyourguide.com/img/location_img-92243-168037023-148.jpg' alt='BG'/>
            </div>
            <div>
                avatar + description
            </div>
            <div>
                My Posts
                <div>
                    New Post
                </div>
                <div>
                    <div>

                        Post 1
                    </div>
                    <div>
                        Post 2
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Profile;
