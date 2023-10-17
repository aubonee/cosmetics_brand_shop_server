const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());
//CosmeticsProduct
//hIlLyKVhhYrlRdMz



//cosmeticsBrandSite
//TyA8MfirbxR2rjbk

//cosmeticsItems
//RYiF6X4ndvjbo7Dn
//const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://cosmeticsItems:RYiF6X4ndvjbo7Dn@cluster0.9lrecxe.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);




app.get('/',(req,res)=>{
    res.send('server side running ')
})

app.listen(port, ()=>{
    console.log(`brand server is running on port :${port}`)})
