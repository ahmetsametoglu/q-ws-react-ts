import { INotification } from '../../api/models/notification';
import { AppActionType, AppAction } from './action';
import { Reducer } from 'typesafe-actions';

type AppState = {
  notificationList: INotification[];
};

const sampleNotification: INotification[] = [
  { id: '1', title: 'success', message: 'account created successfully', type: 'success' },
  { id: '2', title: 'login error', message: 'this username already exist', type: 'error' },
];

const initialState: AppState = {
  notificationList: [...sampleNotification],
};

export const appReducer: Reducer<AppState, AppAction> = (state = initialState, action): AppState => {
  switch (action.type) {
    case AppActionType.ADD_NOTIFICATION: {
      const { title, message, type } = action.payload;
      const duration = action.payload.duration || 5000;
      const id = new Date().getTime().toString();
      return {
        ...state,
        notificationList: [...state.notificationList, { title, message, type, id, duration }],
      };
    }

    case AppActionType.DELETE_NOTIFICATION: {
      const { id } = action.payload;
      const newList = state.notificationList.filter(n => n.id !== id);
      return {
        ...state,
        notificationList: [...newList],
      };
    }

    default:
      return { ...state };
  }
};
