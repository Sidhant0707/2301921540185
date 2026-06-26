import { Router } from 'express';
import { getNotifications, markAsRead, getUnreadCount } from '../controller/notificationController';

const router = Router();

router.get('/', getNotifications);
router.patch('/:id/read', markAsRead);
router.get('/unread-count', getUnreadCount);

export default router;