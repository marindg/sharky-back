import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import { DB_connection } from "./db-config";
import router from "./router";

const app = express();

app.use(
	cors({
		credentials: true,
	})
);

app.use(cors());

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

app.listen(process.env.PORT, () => {
	console.log(`Server is running on port ${process.env.PORT}`);
	DB_connection();
});

app.use("/", router());
