import express from "express"
import mongoose from "mongoose";

const uri = "mongodb+srv://talkal:0tw3LltEeBvbP2L4@cluster0.3gacv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(uri).then (() => {
    console.log("Connected");
})
// import { MongoClient, ServerApiVersion } from 'mongodb';
// const uri = "mongodb+srv://talkal153:zlqGD1EC213OoOU8@cluster0.3gacv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });
// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//     console.log("Succses")
//   }
// }
// run().catch(console.dir);

const PORT = 3000


const app = express()

app.get("/", (_req, res) =>{
    res.send({ hello: "Hello" });

})



app.listen(PORT, () => {
    console.log (`Server is running on Port: $(PORT)`);
})