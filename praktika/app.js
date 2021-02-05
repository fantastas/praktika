const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
//app.use(express.json());

const users = [
    {id: 1, name: "Darius"},
    {id: 2, name: "Jolanta"},
    {id: 3, name: "Merunas"}
]

//create a new user
app.post('/users/', (req, res) =>{
	const user = {
		id: users.length + 1,
		name: req.body.name
	};
	users.push(user);
    res.send(users); 
}); 

//get all users
app.get('/users', (req, res) => {
    res.send(users)
});

//get a specific user
app.get('/users/:id', (req, res) =>{
	const user = users.find(c => c.id === parseInt(req.params.id));
	if(!user) res.status(404).send('User not found.')  	
    res.send(user);
   
});

//add a user
app.put('/users/:id', (req,res) => {
    const user = users.find(c => c.id === parseInt(req.params.id));
    if(!user) res.status(404).send('User not found.') 
    user.name = req.body;
    res.send(user);
    
});

app.delete('/users/:id', (req, res) => {
    const user = users.find(c => c.id === parseInt(req.params.id));
    if(!user) res.status(404).send('User not found');
    users.pop(user);
    res.send(users);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})