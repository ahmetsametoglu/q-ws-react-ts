import React, { useState, Fragment, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import LoginRouteButtons from '../containers/LoginRouteButtons';
import ShowNotification from '../containers/ShowNotification';

type State = { username?: string; password?: string };
type Prop = {};
const HomePage = (props: Prop) => {
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

      <ShowNotification />
      <LoginRouteButtons />
    </Fragment>
  );
};

export default HomePage;
