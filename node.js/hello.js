const { log } = require('console');
const fs = require('fs');
const path = require("path");
const http = require("http");
const {users, getUser} = require("./users")
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)


http.createServer((req,res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('hello world!');
}).listen(3000);

function createFile(){
    fs.writeFileSync('hello.txt', 'Hello world!');
}

function readFile(){
    const data = fs.readFileSync('hello.txt', 'utf8');
    console.log(data);
}

createFile();
readFile();

const filePath = path.join(__dirname, "hello.txt");
console.log(filePath);

console.log(users[0].name);
console.log(getUser(1).name);




