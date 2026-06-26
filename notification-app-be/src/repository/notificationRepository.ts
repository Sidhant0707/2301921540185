import { Notification } from '../domain/notification';

const notifications: Notification[] = [
  {
    id: crypto.randomUUID(),
    title: 'Wipro Recruitment Drive',
    message: 'Wipro is visiting campus on August 2nd for full-stack roles. Carry your updated resume.',
    type: 'Placement',
    priority: 'high',
    read: false,
    createdAt: new Date().toISOString()
  },
  {
    id: crypto.randomUUID(),
    title: 'Backlog Exam Schedule Released',
    message: 'Students with Semester 3 backlogs must check the revised timetable on the student portal.',
    type: 'Result',
    priority: 'high',
    read: false,
    createdAt: new Date().toISOString()
  },
  {
    id: crypto.randomUUID(),
    title: 'Hackathon 2026 Registrations Open',
    message: '24-hour hackathon kicks off July 28th. Teams of 3-4 can register through the student portal.',
    type: 'Event',
    priority: 'medium',
    read: false,
    createdAt: new Date().toISOString()
  },
  {
    id: crypto.randomUUID(),
    title: 'Amazon SDE Internship',
    message: 'Amazon is offering 6-month internships for pre-final year students. Apply before July 18th.',
    type: 'Placement',
    priority: 'high',
    read: true,
    createdAt: new Date().toISOString()
  },
  {
    id: crypto.randomUUID(),
    title: 'Semester 5 Grade Cards Available',
    message: 'Grade cards for Semester 5 are live. Visit the academics section to download yours.',
    type: 'Result',
    priority: 'medium',
    read: true,
    createdAt: new Date().toISOString()
  },
  {
    id: crypto.randomUUID(),
    title: 'Alumni Networking Meet 2026',
    message: 'Annual alumni gathering is on August 10th. Current students can join the networking session.',
    type: 'Event',
    priority: 'low',
    read: false,
    createdAt: new Date().toISOString()
  }
];

export function getNotifications(type?: string, page: number = 1, limit: number = 4) {
  const filtered = type && type !== 'All'
    ? notifications.filter(n => n.type === type)
    : notifications;

  const total = filtered.length;
  const totalPages = Math.ceil(total / limit);
  const start = (page - 1) * limit;
  const data = filtered.slice(start, start + limit);

  return { notifications: data, total, totalPages, page };
}

export function markNotificationRead(id: string) {
  const notification = notifications.find(n => n.id === id);
  if (!notification) return null;
  notification.read = true;
  return notification;
}

export function getUnreadCount() {
  return notifications.filter(n => !n.read).length;
}