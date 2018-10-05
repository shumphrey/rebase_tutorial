import bodyParser from 'body-parser';
import express from 'express';
import path from 'path';

import { getApi } from './controllers/api';
const app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'pug');

app.use(
    express.static(path.join(__dirname, '../public'), { maxAge: 31557600000 }),
);

app.use('/api', getApi);

export default app;

// vim: set ts=4 sw=4 et :
