
import { getNotifications, markNotificationRead, getUnreadCount } from '../repository/notificationRepository';
import Log from '../../../logging-middleware/index.ts';

export async function fetchNotifications(type?: string, page?: number) {
  await Log('backend', 'info', 'service', `Loading notifications — filter: ${type}, page: ${page}`);
  const result = getNotifications(type, page);
  await Log('backend', 'info', 'service', `Returned ${result.notifications.length} notification(s) from store`);
  return result;
}

export async function readNotification(id: string) {
  await Log('backend', 'info', 'service', `Setting read status for notification id: ${id}`);
  const result = markNotificationRead(id);
  if (!result) {
    await Log('backend', 'warn', 'service', `No notification found with id: ${id}`);
  }
  return result;
}

export async function fetchUnreadCount() {
  const count = getUnreadCount();
  await Log('backend', 'info', 'service', `Total unread right now: ${count}`);
  return count;
}