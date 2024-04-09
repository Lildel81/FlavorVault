

const { MongoClient, ServerApiVersion } = require('mongodb');
const credentials = 'C:/Users/terry/Dropbox/Spring 2024/CSC 131 - Software Development/Code Workspace/Cert/X509-cert-8028175764436620696.pem'
const client = new MongoClient('mongodb+srv://codebreakers.g8e7wjq.mongodb.net/?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority&appName=codebreakers', {
  tlsCertificateKeyFile: credentials,
  serverApi: ServerApiVersion.v1
});
async function run() {
  try {
    await client.connect();
    const database = client.db("School");
    const collection = database.collection("Student");
    const docCount = await collection.countDocuments({});
    console.log(docCount);
    // perform actions using client
  } finally {

    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
