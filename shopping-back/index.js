const express = require("express");
const cors = require('cors')
const port = process.env.PORT || 4000

const app = express();


app.use(express.json())
app.use(cors())



app.get('/', (req,res)=>{
    res.send('hello world..')
});


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://Daily:tpaPbN3pdumtplWB@cluster0.oophgll.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

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

    const database = client.db("DailyDB").collection("daily");


    app.post('/daily' ,async(req,res) =>{
        const body = req.body;
        console.log('port is hitting on ' , body)
        const result = await database.insertOne(body);
        res.send(result)
    })

    app.get('/updateself', async(req,res) =>{
       const cursor = database.find();
       const result = await cursor.toArray();
       res.send(result)
    })

    

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);




app.listen(port,()=> console.log(`port is listen on port ${port}`))
