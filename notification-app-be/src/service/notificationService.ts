import { getNotifications, markNotificationRead, getUnreadCount } from '../repository/notificationRepository';
import Log from '../../../logging-middleware/index.ts';

export async function fetchNotifications(type?: string, page?: number) {
  await Log('backend', 'info', 'service', `Fetching notifications - type: ${type}, page: ${page}`);
  const result = getNotifications(type, page);
  await Log('backend', 'info', 'service', `Fetched ${result.notifications.length} notifications`);
  return result;
}

export async function readNotification(id: string) {
  await Log('backend', 'info', 'service', `Marking notification ${id} as read`);
  const result = markNotificationRead(id);
  if (!result) {
    await Log('backend', 'warn', 'service', `Notification ${id} not found`);
  }
  return result;
}

export async function fetchUnreadCount() {
  const count = getUnreadCount();
  await Log('backend', 'info', 'service', `Unread notification count: ${count}`);
  return count;
}