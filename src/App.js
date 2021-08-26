import React, { useState } from 'react';
import NewUserForm from './Components/NewUser/NewUserForm';
import UserList from './Components/UsersList/UsersList';

function App() {
  const [users, setUsers] = useState([]);

  const pushNewUserHandler = (newUser) => {
    setUsers([...users, newUser]);
  };

  return (
    <div>
      <NewUserForm pushNewUser={pushNewUserHandler} />

      <UserList users={users} />
    </div>
  );
}

export default App;
