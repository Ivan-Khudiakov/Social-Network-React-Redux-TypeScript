import style from "./Paginator.module.css";
import React from "react";


type PaginatorPropsType = {
    onPageChanged: (pageNumber: number) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
}
export const Paginator = (props: PaginatorPropsType) => {
    let pagesCount = Math.ceil (props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i=1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
            <div>
                {pages.map(p => <span key={p} className={props.currentPage === p ? style.selectedPage : ""}
                                      onClick={() => {props.onPageChanged(p)}}>{p + " "}</span>)}
            </div>
    )
}