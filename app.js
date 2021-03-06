var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var newRouter = require('./routes/new');

var express = require('express');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/new', newRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

var server = require('http').createServer(app);
 
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
 

//mysqlパッケージの読み込み
const mysql=require('mysql');
//接続情報をcreateConnectionメソッドを用いて定数connectionに代入
const connection=mysql.createConnection({
  //データベース名、パスワードなどを記述
});

connection.query(
  'SELECT * FROM items'
  (error,results)=>{
    console.log(results);
    res.render('index.ejs');
  }
);

app.get('/index', (req,res)=>{
  connection.query( 'SELECT * FROM items',
    (error,results)=>{
      res.render('index.ejs',{items:results}); //オブジェクトを渡す
    }
  );
};

app.post('/create', (req,res)=>{
  //処理
});


module.exports = app;
