import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";

/** ROUTE IMPORTS */

/** CONFIGURATIONS */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
// app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: false }));
app.use(cors());

/** ROUTES  */
app.get("/", (req, res) => {
  res.send("API is running....");
});

/**
 * SERVER LISTENING
 */
const PORT = process.env.PORT || 8000;
app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
