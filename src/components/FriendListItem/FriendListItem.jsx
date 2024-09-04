import css from "./FriendListItem.module.css";
import clsx from "clsx";

export const FriendListItem = ({ item }) => {
    const { avatar, name, isOnline } = item;
    return (
        <div className={css.item}>
            <img src={avatar} alt="Avatar" width="48" />
            <p className={css.pName}>{name}</p>
            <p className={clsx(isOnline ? css.isOnline : css.isNotOnline)}>
                {isOnline ? "Online" : "Offline"}
            </p>
        </div>
    );
};


export default FriendListItem;

     {/* className = { clsx(isOnline? css.isOnline : css.isNotOnline) {isOnline ? "Online" : "Offline"}*/}