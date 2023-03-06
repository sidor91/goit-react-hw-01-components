import { UserProfile } from './UserProfile/UserProfile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import friends from '../json/friends.json';
import user from '../json/user.json';
import statisticsData from '../json/statisticsData.json';
import transactions from '../json/transactions.json'

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        padding: 100,
      }}
    >
      <UserProfile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" data={statisticsData} />
      <Statistics data={statisticsData} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
};
