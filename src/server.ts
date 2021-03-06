import * as express from "express";
import * as morgan from "morgan";
import * as path from "path";
import * as bodyparser from "body-parser";
import { router as api } from "./controller/api";
import { router as aukcja } from "./controller/aukcja";
import { Mongo } from './db/mongo';
import { Config } from './config/config';

export const morganEnable = function () {
    app.use(morgan('dev'));
}
export const app = express();

let server;
const mongo = new Mongo(app);
mongo.getConnection((err, db) => {
    
    console.log('Db "' + db.s.databaseName +'" started');
    app.locals.db = db;
    Config.db = db;
    
    server = app.listen(Config.PORT, function (req, res) {
    });
    server.on('listening', () => {
        console.log(`RUN:   http://localhost:${server.address().port} `);
    });
});

console.log(app.get('env'));



app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.locals.basedir = app.get('views');
app.locals.pretty = true;
if (app.get('env') !== 'test')
    app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, 'static')));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json({ type: 'application/json' }));


app.use('/', (req, res, next) => {

    next();
});
app.use('/api', api);
app.use('/aukcja', aukcja);
app.get('/', (req, res) => {
    res.status(200).render('index', { title: 'Strona Główna' });
});

app.use(function (err, req, res, next) {
    console.log(err);

});
module.exports = app;




