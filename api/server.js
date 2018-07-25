const express = require("express");
const cors = require("cors");
const colorRoutes = require("./routes/colors");

const app = express();
app.use(cors({ credentials: true }));

colorRoutes(app);

app.get("/", (req, res) => res.send("5in1 API Server"));

app.listen(5000);
console.log("Server listening at 5000");
