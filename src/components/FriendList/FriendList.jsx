import clsx from "clsx";
import css from "./FriendList.module.css";
import PropTypes from "prop-types";

const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(({ avatar, name, isOnline }, key) => {
        return (
          <li className={css.friendListItem} key={key}>
            <img className={css.avatar} src={avatar} alt="Avatar" width="48" />
            <p className={clsx(css.nameText)}>{name}</p>
            <p className={clsx(css.text, `${isOnline && css.isOnline}`)}>
              {isOnline ? "Online" : "Offline"}
            </p>
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
