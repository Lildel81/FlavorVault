const express = require("express");
const app = express();
const { mongoClient, MongoClient } = require("mongodb");

const port = 9000;
const host = "http://127.0.0.1:" + port;

app.listen(port, () => console.log(host));

//MongoDB Connection
//const mongodbURL = "mongodb://127.0.0.1:27017";
const mongodbURL = "mongodb+srv://Terry:BBEE9930&Ry133*@codebreakers.g8e7wjq.mongodb.net/?retryWrites=true&w=majority&appName=codebreakers";
const client = new MongoClient(mongodbURL);

async function connect() {
  try {
    const conn = await client.connect();
    const db = conn.db("School");
    const coll = db.collection("Students");
    await db.collection('Students').insertOne({
        Name: "Bugs Bunney",
        Phone_Number: "916-555-8858",
        GPA: 3.9,
        Year: "Senior"
    })
    const result = await coll.find({}).toArray();
    return result;
  } catch (err) {console.log(err)};
    return;
  }


//API
app.get("/", (req, res) => {
  res.send('Hi!');
});

app.get("/students", async (req, res) => {
    const result = await connect();
    res.send(result);
} )
