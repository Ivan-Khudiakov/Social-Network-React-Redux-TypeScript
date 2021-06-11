import styles from "./Paginator.module.css";
import React, {useState} from "react";
import cn from 'classnames'


type PaginatorPropsType = {
    onPageChanged: (pageNumber: number) => void
    totalItemsCount: number
    pageSize: number
    currentPage: number
    portionSize: number
}
export const Paginator = (props: PaginatorPropsType) => {
    let pagesCount = Math.ceil (props.totalItemsCount / props.pageSize)
    let pages = []
    for (let i=1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let portionCount = Math.ceil(pagesCount/props.portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * props.portionSize + 1
    let rightPortionPageNumber = portionNumber * props.portionSize
    return <div className={styles.paginator}>
                {portionNumber > 1 && <button onClick={() => {setPortionNumber(portionNumber-1)}}>PREV</button>}

                {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber).map((p) => {
                    return <span className={cn({[styles.selectedPage]: props.currentPage === p}, styles.pageNumber)}
                                 key={p}
                                 onClick={() => {props.onPageChanged(p)}}
                    >{p}</span>
                    })}

        { portionCount > portionNumber && <button onClick={() => {setPortionNumber(portionNumber + 1)}}>NEXT</button>}

            </div>
}