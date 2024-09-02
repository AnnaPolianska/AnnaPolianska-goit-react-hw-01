import userData from "../../userData.json";
import Profile from "../Profile/Profile";
import './App.css'
import FriendList from "../FriendList/FriendList";
import friends from "../../friends.json"
import transactions from "../../transactions.json";
import TransactionHistory from "../TransactionHistory/TransationHistory"


export default function App  (){
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};




