const express = require('express');
const cors = require('cors');
const knex = require('knex');

const db = knex({
  // connect to your own database here
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : 'imtsqlpadl18',
    database : 'predictions'
  }
});

const app = express();

app.use(cors())
app.use(express.json());

app.get('/', (req, res)=> { 
  console.log('sup');
})

app.listen(3000, ()=> {
  console.log('app is running on port 3000');
})
