const path = require("path");
const express = require("express");
const ejs = require("ejs");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 3001;
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
const mysql = require("mysql2");
const cors = require('cors');



//app.get("/api", (req, res) => {
//  res.json({ messages: "Hello Wssssorld!" });
//});
//
//// POSTリクエストを処理するエンドポイントを作成
//app.post('/save-data', (req, res) => {
//  // リクエストボディからデータを取得
//  const data = req.body;
//  con.query('INSERT INTO sample3 SET ?', data, (error, results, fields) => {
//    // データをデータベースに保存するなどの処理を行う
//    // ここで実際のデータベースへの保存処理を行います
//    console.log('Received data:', data);
//    // レスポンスを返す
//    res.send('Data received successfully!');
//  });
//
//});


const con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "rootroot",
  database: "world",
  dateStrings: 'date' 
});

app.use(cors());
app.get("/api/get/category", (req, res) => {
     const sqlSelect = "SELECT * FROM sample3";
     con.query(sqlSelect, (err, result) => {
         res.send(result);
     });
});


  
// mysqlからデータを持ってくる
app.get("/", (req, res) => {
  // cssファイルの取得
  app.use(express.static("assets"));
  const sql = "select * from sample3";

  
  // ==========ここまでの範囲で書くようにしましょう。==========
  app.post("/", (req, res) => {
    const sql = 'INSERT INTO sample3 SET ?'
    con.query(sql, req.body, function (err, result, fields) {
      if (err) throw err;
      console.log(result);
      res.redirect("/");
    });
  });

  con.query(sql, function (err, result, fields) {
    if (err) throw err;
    res.render("index", {
      users: result,
      sample3: result,
    });
  });

  app.use(express.json());




 
});
  

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
