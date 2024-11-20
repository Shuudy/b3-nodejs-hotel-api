import { Router } from "express";
import { getClients, getClientById, reservationChambre, createClient, loginClient } from "../controllers/client.controller.js";
import { checkBodyCreateClient } from "../middlewares/createclient.middleware.js";
import { checkLoginClient } from "../middlewares/login.middleware.js";
import { isAdminClient } from "../middlewares/isadmin.middleware.js";
import { isAuth } from "../middlewares/isauth.middleware.js";

export const router = Router();

// Auth routes
router.post('/login', checkLoginClient, (req, res) => loginClient(req, res));

router.get('/user', isAuth, (req, res) => {
    res.send("Route user");
});
router.get('/admin', isAuth, isAdminClient, (req, res) => {
    res.send("Route admin");
});

router.get('/clients', (req, res) => getClients(req, res));

router.post('/clients/create', checkBodyCreateClient, (req, res) => createClient(req, res));

router.get('/clients/:id', (req, res) => getClientById(req, res));
router.get('/clients/:id/reservation/:roomid', (req, res) => reservationChambre(req, res));