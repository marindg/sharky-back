import { Request, Response, NextFunction } from "express";

import { getUserByEmail, createUser } from "../services/user";
import { authentication, random } from "../helpers";
import { IUser } from "../@types/user";
import mongoose, { Model } from "mongoose";

// export const register = async (req: express.Request, res: express.Response) => {
// 	try {

//             const {
//         firstName,
//         lastName,
//         userName,
//         gender,
//         birthDate,
//         email,
//         password,
//         sharkSkills,
//         typeOfLocal,

//     }:IUser = req.body

// 	if (!userName || !email || !password || !sharkSkills || !typeOfLocal ) {
// 			return res.sendStatus(400);
// 		}

// 		const existingUser = await getUserByEmail(email);

// 		if (existingUser) {
// 			return res.sendStatus(400);
// 		}

// 		const salt = random();
// 		const user = await createUser();

// 		});

// 		return res.status(200).json(user).end();
// 	} catch (error) {
// 		console.log(error);
// 		return res.sendStatus(400);
// 	}
// };

export const userRegister =
	(model: Model<IUser>) =>
	async (req: Request, res: Response, next: NextFunction) => {
		try {
			const newUser = new model({
				_id: new mongoose.Types.ObjectId(),
				...req.body,
			});

			console.log("create project :", newUser._id);

			return await newUser
				.save()
				.then((result: any) => res.status(201).json({ result }));
		} catch (error) {
			console.log(error);
			return res.status(500).json({ error });
		}
	};
