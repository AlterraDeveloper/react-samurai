import React from 'react';
import s from "./Pagination.module.css";
import {getArrayFromRange} from "../../utils/arrayUtils";

const Page = (props) => {
    const classes = `${s.page} ${
        props.currentPage === props.page && s.selectedPage
    }`;
    return (
        <span
            key={props.page}
            onClick={props.onPageChanged.bind(null, props.page)}
            className={classes}
        >
              {props.page}
            </span>
    );
}

const PageDelimiter = () => <span className={s.pageDelimiter}>...</span>;

export const Pagination = (props) => {
    const pagesCount = Math.ceil(props.itemsCount / props.pageSize);
    let pages = [];
    const firstPages = getArrayFromRange(1, 2);
    const lastPages = getArrayFromRange(pagesCount - 1, pagesCount)
    if (pagesCount > 10) {
        if (props.currentPage < 8) {
            pages.push(...getArrayFromRange(1, 8));
            pages.push(-1);
            pages.push(...lastPages)
        } else if (props.currentPage >= 8 && props.currentPage < pagesCount - 8) {
            pages.push(...firstPages);
            pages.push(-1);
            pages.push(...getArrayFromRange(props.currentPage - 2, props.currentPage + 2));
            pages.push(-1);
            pages.push(...lastPages);
        } else {
            pages.push(...firstPages);
            pages.push(-1);
            pages.push(...getArrayFromRange(pagesCount - 8, pagesCount));
        }
    } else {
        pages = getArrayFromRange(1, pagesCount);
    }

    return <div className={s.pages}>
        {pages.map((page) => page === -1
            ? <PageDelimiter/>
            : <Page page={page} currentPage={props.currentPage} onPageChanged={props.onPageChanged}/>)}
    </div>
}