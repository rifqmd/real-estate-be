import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import { authMiddleware } from "./middleware/authMiddleware";
// import "dotenv/config";

/** ROUTE IMPORTS */
import tenantRoutes from "./routes/tenantRoutes";

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
// app.get("/", authMiddleware(["manager"]), (req, res) => {
app.get("/", (req, res) => {
  res.send("API is running....");
});

// app.use("/tenants", authMiddleware(['/tenant']), tenantRoutes)

/** SERVER LISTENING */
const PORT = process.env.PORT || 8001;
app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
