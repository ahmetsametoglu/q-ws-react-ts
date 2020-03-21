import './Notification.css';
import React, { useEffect } from 'react';
import { INotification } from '../../api/models/notification';
import { useDispatch } from 'react-redux';
import { AppActions } from '../../redux/app/action';

type Prop = { notification: INotification };
const Notification = (props: Prop) => {
  const { title, message, type, duration, id } = props.notification;
  const dispatch = useDispatch();
  setTimeout(() => {
    dispatch(AppActions.deleteNotification(id));
  }, duration);

  return (
    <div className={`notification ${type}`}>
      <div className="title">{title}</div>
      <div className="message">{message}</div>
    </div>
  );
};

export default Notification;
