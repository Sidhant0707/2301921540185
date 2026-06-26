
import { Request, Response } from 'express';
import { fetchNotifications, readNotification, fetchUnreadCount } from '../service/notificationService';
import Log from '../../../logging-middleware/index.ts';

export async function getNotifications(req: Request, res: Response) {
  try {
    await Log('backend', 'info', 'controller', 'Incoming request to fetch notifications');
    const type = req.query.type as string | undefined;
    const page = parseInt(req.query.page as string) || 1;
    const data = await fetchNotifications(type, page);
    res.status(200).json(data);
  } catch (error) {
    await Log('backend', 'error', 'controller', `Error while fetching notifications: ${error}`);
    res.status(500).json({ message: 'Internal server error' });
  }
}

export async function markAsRead(req: Request, res: Response) {
  try {
    await Log('backend', 'info', 'controller', `Received mark-read request for id: ${req.params.id}`);
    const notification = await readNotification(req.params.id);
    if (!notification) {
      return res.status(404).json({ message: 'Notification not found' });
    }
    res.status(200).json(notification);
  } catch (error) {
    await Log('backend', 'error', 'controller', `Could not mark notification as read: ${error}`);
    res.status(500).json({ message: 'Internal server error' });
  }
}

export async function getUnreadCount(req: Request, res: Response) {
  try {
    const count = await fetchUnreadCount();
    res.status(200).json({ unreadCount: count });
  } catch (error) {
    await Log('backend', 'error', 'controller', `Error retrieving unread count: ${error}`);
    res.status(500).json({ message: 'Internal server error' });
  }
}