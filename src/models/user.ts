import mongoose, { Schema, model } from "mongoose";
import { IUser } from "../@types/user";

const userSchema = new Schema<IUser>({
	firstName: { type: String, required: false },
	lastName: { type: String, required: false },
	userName: { type: String, required: true },
	gender: { type: ["homme", "femme", "non-binaire"], required: false },
	birthDate: { type: Date, required: false },
	email: { type: String, required: true },
	password: { type: String, required: true },
	sharkSkills: { type: Number, required: true },
	typeOfLocal: { type: String, required: true },
	login: [
		{
			token: { type: String, required: false },
			loginDate: { type: Date, required: true },
			loginStatus: { type: ["sucess", "failed"], required: true },
			error: { type: String, required: false },
		},
	],
});

export const UserModel = mongoose.model("User", userSchema);
