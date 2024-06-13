const express = require("express");
const bodyParser = require("body-parser");
const { MongoClient } = require("mongodb");
const app = express();
const port = 3000;
app.use(bodyParser.json());
app.set("view engine", "ejs");
// MongoDB connection setup
MongoClient.connect(
  "mongodb+srv://Hassnain_Ali:hassnain@cluster0.o3gnmyd.mongodb.net/",
  {
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 30000, // 30 seconds
  }
)
  .then((client) => {
    const db = client.db("CRUD_API");
    const quotes = db.collection("quotes");
    app.put("/quotes", (req, res) => {
      quotes
        .findOneAndUpdate(
          { name: "Hassnain" },
          {
            $set: {
              name: req.body.name,
              quote: req.body.quote,
            },
          },
          {
            upsert: true,
          }
        )
        .then((res) => {
         window.location.reload(true);
        })
        .catch((error) => {
          console.log(error);
        });
    });

    app.get("/", (req, res) => {
      db.collection("quotes")
        .find()
        .toArray()
        .then((results) => {
          res.render("index.ejs", { quotes: results });
        });
    });
  })
  .catch((error) => {
    console.error("Error connecting to database:", error);
    // Terminate the application if unable to connect to the database
    process.exit(1);
  });

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
