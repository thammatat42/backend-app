import express from 'express';
import morgan from 'morgan';
import routes from './root-routes';
import { globalErrorHanlder } from '@money-story-workspace/core';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

//parse application/json
app.use(express.json());

//parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

//Global middleware
app.use(globalErrorHanlder)

// HTTP request logger
app.use(morgan('dev'));

// Routes
app.use('/', routes); 

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
