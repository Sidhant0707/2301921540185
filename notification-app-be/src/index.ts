import express from 'express';
import cors from 'cors';
import notificationRoute from './route/notificationRoute';
import Log from '../../logging-middleware/index.ts';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use('/notifications', notificationRoute);

app.listen(PORT, async () => {
  await Log('backend', 'info', 'handler', `Server started on port ${PORT}`);
  console.log(`Server running on http://localhost:${PORT}`);
});