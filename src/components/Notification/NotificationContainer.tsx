import './Notification.css';
import React from 'react';
import Notification from './Notification';
import { INotification } from '../../api/models/notification';
import { useSelector } from 'react-redux';

type Prop = {};
const NotificationContainer = (props: Prop) => {
  const appState: any = useSelector<any>(x => x.appState);

  return (
    <div className="notification-container">
      {appState.notificationList.map((n: INotification) => {
        return <Notification key={n.id} notification={n} />;
      })}
    </div>
  );
};

export default NotificationContainer;
