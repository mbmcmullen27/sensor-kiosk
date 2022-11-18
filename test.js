const {env} = require("./env.js")
console.log(env)

const url = `https://api.meraki.com/api/v1/organizations/${env.org_id}/sensor/readings/latest`
console.log(url)
fetch(url, {
  headers:{
    'Authorization': `Bearer ${env.api_token}`
  }
})
.then((res)=>res.json())
.then(data=>console.log(data))

// .then(data=>console.log(data[0].readings[1].door))
