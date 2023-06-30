import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import user from './user.json';
import data from './data.json';
import Profile from 'components/Profile/Profile';
import Statistics from 'components/Statistics/Statistics';

const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      {/* <Statistics stats={data} /> */}
    </div>
  );
}
  
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <App />
    
  </React.StrictMode>
);
