const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine','ejs');
// MongoDB connection setup
MongoClient.connect('mongodb+srv://Hassnain_Ali:hassnain@cluster0.o3gnmyd.mongodb.net/', {
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 30000 // 30 seconds
}).then(client => {
    console.log('Connected to Database');
    const db = client.db("CRUD_API");
    const quotes = db.collection('quotes');

    // Define the route to handle POST requests to '/quotes'
    // app.post('/quotes', (req, res) => {
    //   // Insert the request body into the 'quotes' collection
    //   quotes.insertOne(req.body)
    //     .then(result => {
    //       console.log(result);
    //       res.status(200).send('Quote added successfully');
    //     })
    //     .catch(error => {
    //       console.error('Error inserting quote:', error);
    //       res.status(500).send('Internal Server Error');
    //     });
    // });
    app.get('/', (req, res) => {
    db.collection('quotes').find().toArray().then(results=>{
    res.render('index.ejs',{quotes:results});
      });
     
      }
      );
  })
  .catch(error => {
    console.error('Error connecting to database:', error);
    // Terminate the application if unable to connect to the database
    process.exit(1);
  });

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


