import dotenv from "dotenv";
dotenv.config();
import crypto from "crypto";

export const random = () => crypto.randomBytes(128).toString("base64");
export const authentication = (salt: string, password: string) => {
	return crypto
		.createHmac("sah256", [salt, password].join("/"))
		.update(process.env.CRYPTO_SECRET || "SECRET_SHARKY")
		.digest("hex");
};
