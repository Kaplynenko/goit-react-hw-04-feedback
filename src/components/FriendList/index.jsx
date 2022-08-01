import style from '../FriendList/Friends.module.css';
import FriendListItem from '../FriendList/FriendListItem';

function FriendList({ friends }) {
  return (
    <ul className={style.friendlist}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </ul>
  );
}
export default FriendList;
