const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(
    bodyParser.json()
  );

app.use(cors());
app.listen(3001)

app.post('/',(req,res)=>{
    console.log(req.body);
    res.send({hello:"blach"})
})
app.get('/', (req, res) => {
  console.log()
});