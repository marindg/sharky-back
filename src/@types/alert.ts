import { ObjectId } from "mongoose";

export interface IAlert {
	_id: ObjectId;
	creator: ObjectId;
	creationDate: Date;
	gpslocation: string;
	locationDetail?: string;
	description?: string;
	messages: IMessage[];
}

export interface IMessage {
	_id: ObjectId;
	creator: ObjectId;
	creationDate: Date;
	text: string;
	attachment?: string;
}
