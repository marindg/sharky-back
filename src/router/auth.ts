import express from "express";

import { userRegister } from "../controllers/auth";

export default (router: express.Router) => {
	router.post("/auth/userRegister", userRegister);
};
