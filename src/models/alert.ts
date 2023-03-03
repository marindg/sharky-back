import { Schema, model } from "mongoose";
import { IAlert, IMessage } from "../@types/alert";

const messageSchema = new Schema<IMessage>({
	// _id: { type: Schema.Types.ObjectId, ref: "message" },
	creator: { type: Schema.Types.ObjectId, ref: "user" },
	creationDate: { type: Date, required: true },
	text: { type: String, required: true },
	attachment: { type: String, required: false },
});

const alertSchema = new Schema<IAlert>({
	creator: { type: Schema.Types.ObjectId, ref: "user" },
	creationDate: { type: Date, required: true },
	gpslocation: { type: String, required: true },
	locationDetail: { type: String, required: false },
	description: { type: String, required: false },
	messages: [{ type: messageSchema, required: true }],
});

export default model<IAlert>("alert", alertSchema);
