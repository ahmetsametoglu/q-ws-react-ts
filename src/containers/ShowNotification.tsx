import React from 'react';
import IonButton from '../components/IonButton/IonButton';
import { INotification, INotificationType } from '../api/models/notification';
import { useDispatch } from 'react-redux';
import { AppActionType, AppActions } from '../redux/app/action';

type Prop = {};
const ShowNotification = (props: Prop) => {
  const dispatch = useDispatch();

  const handleShowNotification = (title: string, message: string, type: INotificationType) => {
    dispatch(AppActions.addNotification(title, message, type, 3000));
  };

  return (
    <div>
      <IonButton
        color="danger"
        handleOnClick={() => {
          handleShowNotification('ERROR', 'error message', 'error');
        }}
      >
        show error notification
      </IonButton>
      <IonButton
        color="success"
        handleOnClick={() => {
          handleShowNotification('You Did It', 'success message', 'success');
        }}
      >
        show success notification
      </IonButton>
    </div>
  );
};

export default ShowNotification;
