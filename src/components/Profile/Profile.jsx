import clsx from "clsx";
import css from "./Profile.module.css";
import PropTypes from "prop-types";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.container}>
      <div className={css.upInfo}>
        <img className={css.imgAuthor} src={image} alt="User avatar" />
        <p className={clsx(css.fat, css.upInfoText)}>{name}</p>
        <p className={clsx(css.gray, css.upInfoText)}>@{tag}</p>
        <p className={clsx(css.gray, css.upInfoText)}>{location}</p>
      </div>
      <ul className={css.downInfo}>
        <li className={css.downInfoItem}>
          <span className={css.title}>Followers</span>{" "}
          <span className={css.fat}>{stats.followers}</span>
        </li>
        <li className={css.downInfoItem}>
          <span className={css.title}>Views</span>{" "}
          <span className={css.fat}>{stats.views}</span>
        </li>
        <li className={css.downInfoItem}>
          <span className={css.title}>Likes</span>{" "}
          <span className={css.fat}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
