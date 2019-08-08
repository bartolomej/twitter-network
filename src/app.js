import express from 'express';
import morgan from 'morgan';
import path from 'path';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import routes from './routes';

dotenv.config();
const app = express();

app.set('env', process.env.MODE);
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use('/', routes);

app.listen(process.env.PORT || 3000);
app.on('listening', () => console.log(`App started on ${process.env.PORT}`));