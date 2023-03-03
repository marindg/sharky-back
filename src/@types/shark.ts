import { ObjectId } from "mongoose";

export interface IShark {
	_id: ObjectId;
	name: string;
	img: string;
	family: [
		"Lamniformes",
		"Carcharhiniformes",
		"Orectolobiformes",
		"Pristiophoriformes",
		"Hétérodontiformes",
		"Squaliformes",
		"Squatiniformes",
		"Hexanchiformes",
		"Rajiformes"
	];
	size: number;
	shortDescription: string;
	longDescription: string;
}

export interface ISharks {
	shark: IShark[];
}
