import "./App.css";
import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import user from "./components/Profile/user.json";
import data from "./components/Statistics/data.json";
import friends from "./components/FriendList/friends.json";
import transactions from "./components/TransactionHistory/transactions.json";

function App() {
  return (
    <div className="App">
      {/* <Profile user={user} /> */}
      <FriendList friends={friends} />
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      {/* // kiedy mamy takie same klucze to wystarczy: */}
      {/* <Profile {...user} /> */}
      <Statistics title="Upload stats" stats={data} />

      <TransactionHistory items={transactions} />
      {/* //   <header className="App-header">
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //   </header> */}
    </div>
  );
}

export default App;
