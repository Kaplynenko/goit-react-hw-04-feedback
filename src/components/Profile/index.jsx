import styles from '../Profile/Profile.module.css';
const Profile = ({
  username,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) => (
  <div className={styles.profile}>
    <div className={styles.profileContent}>
      <div className={styles.description}>
        <img src={avatar} alt="User avatar" className={styles.avatar} />
        <p className={styles.name}>{username}</p>
        <p className={styles.tag}>{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li>
          <span className={styles.label}>{followers}</span>
          <span className={styles.quantity}>
            {new Intl.NumberFormat('en-IN').format(followers)}
          </span>
        </li>
        <li>
          <span className={styles.label}>{views}</span>
          <span className={styles.quantity}>
            {new Intl.NumberFormat('en-IN').format(views)}
          </span>
        </li>
        <li>
          <span className={styles.label}>{likes}</span>
          <span className={styles.quantity}>
            {new Intl.NumberFormat('en-IN').format(likes)}
          </span>
        </li>
      </ul>
    </div>
  </div>
);

export default Profile;
