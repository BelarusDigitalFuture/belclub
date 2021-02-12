const {Client} = require('pg');
const client = new Client({
    connectionString: 'postgres://xdctzeagdkimcx:c0d0f10af669df81ec02e19fd144f0254bd0f06ab1c0a32a166ecb8901328159@ec2-108-128-104-50.eu-west-1.compute.amazonaws.com:5432/d3ntrg32ts3crt',
    ssl: {
      rejectUnauthorized: false
    }
  }
)
client.connect()
module.exports = client