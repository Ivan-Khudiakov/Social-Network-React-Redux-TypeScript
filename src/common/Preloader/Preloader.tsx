import preloader from "../../assets/images/preloader.gif";
import React from "react";


export const Preloader = () => {
    return (
        <div>
            <img src={preloader} alt={"Loading..."}/>
        </div>
    )
}