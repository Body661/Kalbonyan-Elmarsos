import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';

function App() {
  const [usersList, setNewUser] = useState([])

  const getUsersData = (userObject) => {
    setNewUser((prevUsers) => {
      return [userObject, ...prevUsers]
    })
  }

  return (
    <div>
      <AddUser userData={getUsersData} />
      <UserList users={usersList} />
    </div>
  );
}

export default App;
