import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import mongoose from 'mongoose';
import indexRouter from './routes/index.js';
import priceRouter from './routes/price.js';
import adminRouter from './routes/admin.js';

mongoose.connect('mongodb://localhost:27017/metallotrans', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();

// view engine setup
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('public'));

app.use('/', indexRouter);
app.use('/price', priceRouter);
app.use('/admin', adminRouter);

const port = process.env.port || 3000;

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

export default app;
