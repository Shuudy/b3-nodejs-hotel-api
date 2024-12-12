import { Router } from "express";
import { loginClient } from "../controllers/client.controller.js";
import { checkLoginClient } from "../middlewares/login.middleware.js";
import { isAuthWithRole } from "../middlewares/isauthwithrole.middleware.js";

export const router = Router();

// Auth routes
router.post('/login', checkLoginClient, (req, res) => loginClient(req, res));

router.get('/user', isAuthWithRole(), (req, res) => {
    res.send("Route user");
});
router.get('/admin', isAuthWithRole('admin'), (req, res) => {
    res.send("Route admin");
});