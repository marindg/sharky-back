import { ObjectId } from "mongoose";

export interface IUser {
	_id: ObjectId;
	firstName?: string;
	lastName?: string;
	userName: string;
	gender?: ["homme", "femme", "non-binaire"];
	birthDate?: Date;
	email: string;
	password: string;
	sharkSkills: number;
	typeOfLocal: string;
	login?: ILogin[];
}

export interface ILogin {
	_id: ObjectId;
	token: String;
	loginDate: Date;
	loginStatus: string;
	error?: string;
}
