import { INotificationType } from '../../api/models/notification';
import { ActionsUnion } from '../util/type.helper';
import { action } from 'typesafe-actions';

export enum AppActionType {
  ADD_NOTIFICATION = '[app]: ADD_NOTIFICATION',
  DELETE_NOTIFICATION = '[app]: DELETE_NOTIFICATION',
}

export const AppActions = {
  addNotification: (title: string, message: string, type: INotificationType, duration?: number) =>
    action(AppActionType.ADD_NOTIFICATION, { title, message, type, duration }),
  deleteNotification: (id: string) => action(AppActionType.DELETE_NOTIFICATION, { id }),
};

export type AppAction = ActionsUnion<typeof AppActions>;
