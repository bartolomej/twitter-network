import express from 'express';
import morgan from 'morgan';
import path from 'path';
import bodyParser from 'body-parser';
import exphbs from 'express-handlebars';
import dotenv from 'dotenv';
import routes from './routes';
import 'handlebars';

dotenv.config();
const app = express();

//app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + 'views'));
console.log(__dirname + 'views')
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

app.listen(process.env.PORT);
console.log(`App started on ${process.env.PORT}`);