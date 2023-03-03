import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";

type IDB_Connection = {
	connectTimeoutMS: number;
	useNewUrlParser: boolean;
	useUnifiedTopology: boolean;
};

export const DB_connection: any = () => {
	const dbOptions: IDB_Connection = {
		connectTimeoutMS: 5000,
		useNewUrlParser: true,
		useUnifiedTopology: true,
	};
	mongoose.set("strictQuery", false);
	mongoose
		.connect(`${process.env.DB_URI}`, dbOptions)
		.catch((err: Error) => console.log("[DB connection failed]", err.message));
};
