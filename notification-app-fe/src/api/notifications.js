const BASE_URL = 'http://localhost:3000';

export async function fetchNotifications(type, page = 1) {
  const params = new URLSearchParams({ page });
  if (type && type !== 'All') params.append('type', type);
  const res = await fetch(`${BASE_URL}/notifications?${params}`);
  return res.json();
}

export async function markAsRead(id) {
  const res = await fetch(`${BASE_URL}/notifications/${id}/read`, {
    method: 'PATCH'
  });
  return res.json();
}