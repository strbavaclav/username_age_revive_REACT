import React from 'react';

const UserItem = (props) => {
  return (
    <div>
      <p>
        {props.username} ({props.age} years old)
      </p>
    </div>
  );
};

export default UserItem;
