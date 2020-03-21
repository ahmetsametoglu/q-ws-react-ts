import React, { FC } from 'react';
import './IonButton.css';

type IonButtonProperties = {
  // label: string;
  handleOnClick: () => void;
  color?: 'primary' | 'success' | 'danger';
  // children: React.ReactNode;
};

const IonButton: FC<IonButtonProperties> = props => {
  return (
    <button className={`ion-button ${props.color}`} onClick={props.handleOnClick}>
      {props.children}
    </button>
  );
};

export default IonButton;
