

import { Box, Card, CardContent, Chip, Typography, IconButton } from "@mui/material";
import DoneAllIcon from "@mui/icons-material/DoneAll";

const typeStyles = {
  Placement: { color: "#7c3aed", bg: "#f5f3ff" },
  Result:    { color: "#0369a1", bg: "#f0f9ff" },
  Event:     { color: "#b45309", bg: "#fffbeb" }
};

const priorityBorder = {
  high:   "#ef4444",
  medium: "#f97316",
  low:    "#9ca3af"
};

const priorityLabel = {
  high:   { label: "High",   chipColor: "error" },
  medium: { label: "Medium", chipColor: "warning" },
  low:    { label: "Low",    chipColor: "default" }
};

export function NotificationCard({ notification, onMarkRead }) {
  const tStyle = typeStyles[notification.type] || { color: "#374151", bg: "#f9fafb" };
  const borderColor = priorityBorder[notification.priority] || "#9ca3af";
  const pLabel = priorityLabel[notification.priority] || priorityLabel.low;

  return (
    <Card
      variant="outlined"
      sx={{
        borderLeft: `5px solid ${borderColor}`,
        opacity: notification.read ? 0.55 : 1,
        backgroundColor: notification.read ? "#fafafa" : "#ffffff",
        transition: "opacity 0.2s"
      }}
    >
      <CardContent sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <Box flex={1}>
          <Box display="flex" alignItems="center" gap={1} mb={1} flexWrap="wrap">
            <Chip
              label={notification.type}
              size="small"
              sx={{ backgroundColor: tStyle.bg, color: tStyle.color, fontWeight: 600 }}
            />
            <Chip
              label={`${pLabel.label} Priority`}
              size="small"
              color={pLabel.chipColor}
              variant="outlined"
            />
            {!notification.read && (
              <Chip label="New" size="small" sx={{ backgroundColor: "#dcfce7", color: "#15803d" }} />
            )}
          </Box>
          <Typography variant="subtitle1" fontWeight={700} gutterBottom>
            {notification.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {notification.message}
          </Typography>
          <Typography variant="caption" color="text.disabled" mt={1} display="block">
            {new Date(notification.createdAt).toLocaleString()}
          </Typography>
        </Box>
        {!notification.read && (
          <IconButton size="small" onClick={() => onMarkRead(notification.id)} sx={{ ml: 1 }}>
            <DoneAllIcon fontSize="small" />
          </IconButton>
        )}
      </CardContent>
    </Card>
  );
}