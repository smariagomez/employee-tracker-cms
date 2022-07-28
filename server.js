const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'tracker_db'
  },
  console.log(`Connected to the tracker_db database.`)
);

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

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});