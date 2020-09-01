import { Router } from "express";

import WelcomeController from "./app/controllers/WelcomeController";

const routes = new Router();

routes.get("/teste", WelcomeController.welcome);
routes.post("/user", WelcomeController.store);

export default routes;
