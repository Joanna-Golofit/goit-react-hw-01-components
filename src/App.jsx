import "./App.css";
import user from "./components/Profile/user.json";
import Profile from "./components/Profile/Profile";
import data from "./components/Statistics/data.json";
import Statistics from "./components/Statistics/Statistics";
import friends from "./components/FriendList/friends.json";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
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
      <Statistics title="Upload stats" stats={data} />


      <TransactionHistory items={transactions}/>
      {/* //   <header className="App-header">
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //   </header> */}
    </div>
  );
}

export default App;
