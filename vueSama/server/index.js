// console.log("Hello DIMON");
const express = require('express');
const fs = require("fs");

const server = express();
server.get('/catalog', (reg, res)=>{
    fs.readFile('./server/bd/catalog.json', 'utf-8', (err, data)=>{
        if(!err){
            res.send(data)
        }
    })
})

server.listen(3000, ()=>{ console.log("listen 3000 xxx") });



// server.get('/', (req, res) => {
//     let htm = '<h1>Hello Ksu</h1>'
//     res.send(htm)
// });
//
// server.get('/:name', (reg, res) => {
//    let name = reg.params.name
//     let htm =` <h1>Hello, ${name}</h1>`
//     res.send(htm)
// })