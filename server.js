const express = require('express');
const mysql = require('mysql2');
const cTable = require('console.table');
const {table} = require('console');
const app = express()

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tracker_db'
  },
  console.log(`Connected to the tracker_db database.`)
);

db.query('SELECT * FROM department', function (err, results){
    console.table(results);
});

// app.get("/api/movies",(req,res)=>{
//     db.query("SELECT * FROM movies",(err,data)=>{
//         if(err){
//             throw err
//         }
//         res.json(data);
//     })
// })

// app.post("/api/movies/add-movie",(req,res)=>{
//     db.query("INSERT INTO movies (movie_name) VALUES (?)",[req.body.title],(err,data)=>{
//         if(err){
//             throw err
//         }
//         res.json(data);
//     })
// })

// app.delete("/api/movies/:id",(req,res)=>{
//     db.query("DELETE FROM movies WHERE id=?",[req.params.id],(err,data)=>{
//         if(err){
//             throw err
//         }
//         res.json(data);
//     })
// })

// app.get("/api/reviews",(req,res)=>{
//     db.query("SELECT reviews.id, movie_name AS title, review FROM reviews JOIN movies ON reviews.movie_id=movies.id",(err,data)=>{
//         if(err){
//             throw err
//         }
//         res.json(data);
//     })
// })

// app.put("/api/reviews/:id",(req,res)=>{
//     db.query("UPDATE reviews SET review=? WHERE id= ?",[req.body.review,req.params.id],(err,data)=>{
//         if(err){
//             throw err
//         }
//         res.json(data);
//     })
// })
