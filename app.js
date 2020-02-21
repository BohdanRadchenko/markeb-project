const express = require("express");

const PORT = process.env.PORT || 5000

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json({ extended: true }));


app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});


  app.use("/", express.static(path.join(__dirname, , "build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "build", "index.html"));
  });


const start = async () => {
  try {
    app.listen(PORT, () => console.log("App hes benn started on port " + PORT));
  } catch (e) {
    console.log("server error", e.message);
    process.exit(1);
  }
};

start();
