import clsx from "clsx";
import css from "./FriendListItem.module.css";
import PropTypes from "prop-types";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={css.friendListItem}>
      <img className={css.avatar} src={avatar} alt="Avatar" width="48" />
      <p className={clsx(css.nameText)}>{name}</p>
      <p className={clsx(css.text, `${isOnline && css.isOnline}`)}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
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
