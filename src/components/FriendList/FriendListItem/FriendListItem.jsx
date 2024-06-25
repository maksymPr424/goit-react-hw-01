import clsx from "clsx";
import css from "./FriendListItem.module.css";
import PropTypes from "prop-types";

const FriendListItem = ({ friends }) => {
  console.log(friends);
  return (
    <>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <li className={css.friendListItem} key={id}>
            <img className={css.avatar} src={avatar} alt="Avatar" width="48" />
            <p className={clsx(css.nameText)}>{name}</p>
            <p className={clsx(css.text, `${isOnline && css.isOnline}`)}>
              {isOnline ? "Online" : "Offline"}
            </p>
          </li>
        );
      })}
    </>
  );
};

export default FriendListItem;

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
