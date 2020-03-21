import './Notification.css';
import React from 'react';
import Notification from './Notification';
import { INotification } from '../../api/models/notification';
import { useTypeSelector } from '../../redux/util/selector.helper';

type Prop = {};
const NotificationContainer = (props: Prop) => {
  const { notificationList } = useTypeSelector(x => x.appState);

  return (
    <div className="notification-container">
      {notificationList.map((n: INotification) => {
        return <Notification key={n.id} notification={n} />;
      })}
    </div>
  );
};

export default NotificationContainer;
