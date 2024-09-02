
import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css";


export default function FriendList({ friends }) {
    return (
<div className={css.mainContainerFriend}>
            <ul className={css.listItem}>
                {friends.map((friend) => {
                    return (
                        <li key={friend.id} className={css.liItem}>
                            <FriendListItem item={friend} />
                        </li>
                    );
                })}
            </ul>
        </div>

    )
}