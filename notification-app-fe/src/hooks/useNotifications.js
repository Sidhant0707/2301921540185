import { useState, useEffect } from "react";
import { fetchNotifications } from "../api/notifications";

export function useNotifications(filter, page = 1) {
  const [notifications, setNotifications] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchNotifications(filter, page);
        setNotifications(data.notifications ?? []);
        setTotalPages(data.totalPages ?? 1);
        setTotal(data.total ?? 0);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [filter, page]);

  return { notifications, total, totalPages, loading, error };
}