import React from 'react';
import IonButton from '../components/IonButton';
import { useHistory } from 'react-router-dom';

const LoginRouteButtons = () => {
  const history = useHistory();
  const goToLoginPage = () => {
    history.push('/login');
  };
  return (
    <div>
      <IonButton color="primary" handleOnClick={goToLoginPage}>
        go to Login Page
      </IonButton>
      <IonButton color="danger" handleOnClick={goToLoginPage}>
        go to Login Page
      </IonButton>
      <IonButton color="success" handleOnClick={goToLoginPage}>
        <div style={{ color: 'red', height: '100px' }}> go to Login Page</div>
      </IonButton>
    </div>
  );
};

export default LoginRouteButtons;
