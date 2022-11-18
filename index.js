const {env} = require("./env.js");
const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 8080;
const host = process.env.HOST || '0.0.0.0';

app.use(cors())

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/sensor', async function(req,res) {
  console.log("reading sensors...")
  let url = `https://api.meraki.com/api/v1/organizations/${env.org_id}/sensor/readings/latest`
  fetch(url, {
    headers:{
      'Authorization': `Bearer ${env.api_token}`
    }
  }).then((resp)=>resp.json())
  .then(data=>res.send(data[0].readings[1].door)) 
})

app.listen(port, host);
console.log(`Server started at http://${host}:${port}`);