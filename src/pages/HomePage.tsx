import React, { useState, Fragment, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import LoginRouteButtons from '../container/LoginRouteButtons';

type State = { username?: string; password?: string };

const HomePage = () => {
  const [state, setState] = useState<State>({});
  const history = useHistory();

  useEffect(() => {
    console.log('[home]: useEffect component mount');

    return () => {
      console.log('[home]: useEffect component destroy');
    };
  }, []);

  useEffect(() => {
    console.log('[home]: useEffect state changed', state);
    return () => {
      console.log('[home]: useEffect state changed return', state);
    };
  }, [state]);

  const changeName = () => {
    setState({ ...state, username: 'serdar' });
  };

  const goToLoginPage = () => {
    history.push('/login');
  };

  return (
    <Fragment>
      <h1>Home Page</h1>
      <h4>{state?.username}</h4>
      <h4>{state?.password}</h4>
      <button onClick={changeName}>degistir</button>
      <button onClick={goToLoginPage}>Go Login Page</button>

      <LoginRouteButtons />
    </Fragment>
  );
};

export default HomePage;
