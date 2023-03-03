import { UserModel } from "../models/user";
import { IUser } from "../@types/user";

export const getUsers = () => UserModel.find();
export const getUserByEmail = (email: string) => UserModel.findOne({ email });
export const getUserBySessionToken = (sessionToken: string) =>
	UserModel.findOne({ "login.token": sessionToken });
export const getUserById = (id: string) => UserModel.findById(id);
export const createUser = (values: IUser) =>
	new UserModel(values).save().then((user) => user.toObject());
export const deleteUserById = (id: string) =>
	UserModel.findOneAndDelete({ _id: id });
export const updateUserById = (id: string, values: IUser) =>
	UserModel.findByIdAndUpdate(id, values);
