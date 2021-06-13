import React from "react"
import {Preloader} from "../common/Preloader/Preloader";

export function withSuspense<WCP>(WrappedComponent: React.ComponentType<WCP>) {
    return (props: WCP) => {
        return <React.Suspense fallback={<Preloader/>} >
            <WrappedComponent {...props} />
        </React.Suspense>
    }
}