export type NotificationType = 'Placement' | 'Result' | 'Event';
export type PriorityLevel = 'high' | 'medium' | 'low';

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: NotificationType;
  priority: PriorityLevel;
  read: boolean;
  createdAt: string;
}