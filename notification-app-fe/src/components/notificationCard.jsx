import { Box, Card, CardContent, Chip, Typography, IconButton } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";

const typeColors = {
  Placement: "primary",
  Result: "success",
  Event: "warning"
};

export function NotificationCard({ notification, onMarkRead }) {
  return (
    <Card variant="outlined" sx={{ opacity: notification.read ? 0.6 : 1, borderLeft: notification.read ? "none" : "4px solid #1976d2" }}>
      <CardContent sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <Box flex={1}>
          <Box display="flex" alignItems="center" gap={1} mb={0.5}>
            <Chip label={notification.type} color={typeColors[notification.type] || "default"} size="small" />
            {!notification.read && <Chip label="Unread" size="small" variant="outlined" />}
          </Box>
          <Typography variant="subtitle1" fontWeight={600}>{notification.title}</Typography>
          <Typography variant="body2" color="text.secondary">{notification.message}</Typography>
          <Typography variant="caption" color="text.disabled" mt={1} display="block">
            {new Date(notification.createdAt).toLocaleString()}
          </Typography>
        </Box>
        {!notification.read && (
          <IconButton size="small" onClick={() => onMarkRead(notification.id)}>
            <DoneIcon fontSize="small" />
          </IconButton>
        )}
      </CardContent>
    </Card>
  );
}