import React from 'react';
import Card from '../UI/Card';
import UserItem from './UserItem';
import classes from './UsersList.module.css';

const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            <UserItem username={user.username} age={user.age} />
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
