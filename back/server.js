const express = require("express");
const bodyParser = require("body-parser");
const { createPool } = require("mysql2");
const { resolve } = require("path");
const { HOST, USER, PASSWORD, DB } = require("./config/db.config.js");

const server = express();
const pool_gestbook = createPool({
  host: HOST,
  user: USER,
  password: PASSWORD,
  database: DB,
  waitForConnections: true,
  connectionLimit: 30,
  queueLimit: 30,
});

server.use(bodyParser.json());
server.use(express.static(resolve(__dirname, "../gestbook/build")));

server.get("/", (req, res) => {
  res.sendFile(resolve(__dirname, "../gestbook/build/index.html"));
});

server.get("/api", (req, res) => {
  res.json("Hello from server!");
});

server.get("/connect", (req, res) => {
  pool_gestbook.query(`SELECT * FROM notes`, (err, result, fields) => {
    if (!err) {
      res.json("connect");
    } else {
      console.log(err);
    }
  });
});

server.get("/base", (req, res) => {
  pool_gestbook.query(`SELECT * FROM notes`, (err, result, fields) => {
    if (!err) {
      res.json(result);
    } else {
      console.log(err);
    }
  });
});

server.post("/add", (req, res) => {
  let t = req.body;
  console.log(t);
  pool_gestbook.query(
    `INSERT INTO notes (name, note, date) VALUE ("${t.name}", "${t.note}", "${t.date}")`,
    (err, result, field) => {
      if (!err) {
        pool_gestbook.query(`SELECT * FROM notes`, (err, result, field) => {
          res.json(result);
        });
      } else {
        console.log(err);
      }
    }
  );
});

server.use((req, res) => {
  res.json("error");
});

server.listen(4000, () => {
  console.log("http://localhost:4000");
});
