const express = require('express')
const app = express()

app.use(express.json());

const users = [
  {id: 1, name: "aa"},
  {id: 2, name: "bb"},
  {id: 3, name: "cc"}
]

app.get('/',  (req, res) => {
  res.send('Hello World')
})

app.get('/users',  (req, res) => {
  return res.json(users)
})

app.post("/add-user",  (req, res) => {
  const {name} = req.body;
  if(!name){
    return res.status(400).json({error: "name is required"});
  }

  const userExist = users.find(user => user.name.includes(name));
  if(userExist){
    return res.status(400).json({error: "name exist"});
  }

  const newUser = {
    id: users.length+1,
    name,
  }
  users.push(newUser);

  return res.status(201).json(users)
})



app.listen(3000, () => {
    console.log("server is running on http://localhost:3000");
})
