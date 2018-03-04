const express = require("express");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(helmet());
app.use(cors());

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
