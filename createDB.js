var MongoClient = require('mongodb').MongoClient
var data = require("./data.js").data
const uri = "mongodb://localhost:27017/"
const client = new MongoClient(uri)
async function run() {
  try {
    await client.connect();
    var database = client.db("Subnautica");
    database.dropDatabase()
    database = client.db("Subnautica");
    const fauna = database.collection("fauna_Sub");
    const result = await fauna.insertMany(data);
    console.log(`${result} documents were inserted`)
  } 
  finally {await client.close();}
}
run()
