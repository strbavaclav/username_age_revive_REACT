import React, { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import classes from './NewUserForm.module.css';

const NewUserForm = (props) => {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');
  const [error, setError] = useState(false);

  const changeUsernameHandler = (e) => {
    setUsername(e.target.value);
  };

  const changeAgeHandler = (e) => {
    setAge(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values)',
      });
      return;
    }
    let newUser = {
      username: username,
      age: age,
      id: Math.random().toString(),
    };
    props.pushNewUser(newUser);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onError={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <label>Username</label>
        <input onChange={changeUsernameHandler} type='text' />
        <label>Age (Years)</label>
        <input onChange={changeAgeHandler} type='number' />
        <Button onClickHandle={submitHandler}>Add User</Button>
      </Card>
    </div>
  );
};

export default NewUserForm;
