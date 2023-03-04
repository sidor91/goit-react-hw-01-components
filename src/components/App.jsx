import { UserProfile } from './UserProfile/UserProfile';
import { Statistics } from './Statistics/Statistics';
import user from './UserProfile/user.json';
import statisticsData from './Statistics/statisticsData.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
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
    </div>
  );
};
