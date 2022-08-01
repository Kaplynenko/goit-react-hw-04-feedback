import Container from './Container/Container';
import Profile from './Profile/index';
import Statistics from './Statistics/index';
import FriendList from './FriendList/index';
import TransactionHistory from './TransactionHistory/index';
import users from './Patch/user.json';
import data from './Patch/data.json';
import friends from './Patch/friends.json';
import transactions from './Patch/transactions.json';
export const App = () => {
  return (
    <main>
      <Container>
        <Profile
          username={users.username}
          tag={users.tag}
          location={users.location}
          avatar={users.avatar}
          followers={users.stats.followers}
          views={users.stats.views}
          likes={users.stats.likes}
        />
        <Statistics items={data} />
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />
      </Container>
    </main>
  );
};
