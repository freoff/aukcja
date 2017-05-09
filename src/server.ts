import * as express from "express";
import * as morgan from "morgan";
import * as path from "path";
import * as bodyparser from "body-parser";
import {router as api} from "./controller/api";
import {router as aukcja} from "./controller/aukcja";

export const morganEnable = function(){
    app.use(morgan('dev'));
}

export const app = express();
const server = app.listen(3000, function (req, res) {
});
server.on('listening', () => {
    console.log(`RUN:   http://localhost:${server.address().port} `);
})

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.locals.basedir = app.get('views');
app.locals.pretty = true;
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, 'static')));
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json({type: 'application/json'}));


app.use('/', (req, res, next) => {
    
    next();
});
app.use('/api', api);
app.use('/aukcja', aukcja);
app.get('/', (req, res) => {
    res.status(200).render('index', {title: 'Strona Główna'});
});

app.use(function (err, req, res, next) {
    console.log(err);

});
module.exports = app;




