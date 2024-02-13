import React from "react";
import s from "./UsersList.module.css";
import User from "../User/User";
import {Preloader} from "../Preloader/Preloader";
import {Pagination} from "../Pagination/Pagination";

export const UsersList = (props) => {
    const users = props.users.map((u) => (
        <User
            key={u.id}
            user={u}
            followingsInProgress={props.followingsInProgress}
            followUser={props.followUser}
            unfollowUser={props.unfollowUser}
        ></User>
    ));

    return (
        <div className={s.usersList}>
            <Pagination key={1} itemsCount={props.totalUsersCount} pageSize={props.pageSize} currentPage={props.currentPage}
                        onPageChanged={props.onPageChanged}/>
            {props.isUsersLoading ? (
                <Preloader/>
            ) : (
                <div className={s.users}>{users}</div>
            )}
            <Pagination key={2} itemsCount={props.totalUsersCount} pageSize={props.pageSize} currentPage={props.currentPage}
                        onPageChanged={props.onPageChanged}/>
        </div>
    );
};
