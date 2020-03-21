export interface INotification {
  id: string;
  title: string;
  message: string;
  type: INotificationType;
  duration?: number;
}

export type INotificationType = 'success' | 'error';
