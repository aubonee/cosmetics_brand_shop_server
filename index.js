const express = require('express');
const cors = require('cors');
require('dotenv').config()
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());



//chytahsin2210
//NDtSgKecnzt11XU8

//console.log(process.env.DB_USER)
//console.log(process.env.DB_PASS)
//
//db_user
//dbpass1234
//const uri = `mongodb+srv://db_user:dbpass1234@cluster0.jkbvpzz.mongodb.net/?retryWrites=true&w=majority`;
//const uri = "mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.jkbvpzz.mongodb.net/?retryWrites=true&w=majority";

const uri = "mongodb+srv://db_user:dbpass1234@cluster0.jkbvpzz.mongodb.net/?retryWrites=true&w=majority";

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
    //await client.connect();
    
   

    // Send a ping to confirm a successful connection
    //await client.db("admin").command({ ping: 1 });
    
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    //await client.close();
  }
}
run().catch(console.dir);
const productCollection =client.db('productDB').collection('product');
   
//  app.get('/products', async(req,res)=>{
//     app.get('/products', async(req,res)=>{
//     const cursor =productCollection.find();
   
//     const result =await cursor.toArray();
//     res.send(result);

//   })

//app.get('/products', async(req,res)=>{
  app.get('/products', async(req,res)=>{
  const cursor =productCollection.find();
 
  const result =await cursor.toArray();
  res.send(result);

})

// app.get('/products/:brandName', async (req, res) => {
//   const id = req.params.brandName;
//   const query = { brandName: brandName }
//   const result = await coffeeCollection.find(query);
//   res.send(result);
// })

  app.post('/products', async(req,res)=>{
    
    const newproduct =req.body;
    console.log(newproduct);
    const result =await productCollection.insertOne(newproduct);
    res.send(result);

  })
  app.delete('/products/:id', async (req, res) => {
    const id = req.params.id;
    const query = { _id: new ObjectId(id) }
    const result = await productCollection.deleteOne(query);
    res.send(result);
})

app.get('/',(req,res)=>{
    res.send('server side running')
})

app.listen(port, ()=>{
    console.log(`brand server is running on port :${port}`)})