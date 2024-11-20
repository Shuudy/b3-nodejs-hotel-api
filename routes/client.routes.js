import { Router } from "express";
import { getClients, getClientById, reservationChambre, createClient, loginClient } from "../controllers/client.controller.js";
import { checkBodyClientInfo } from "../middlewares/clientinfo.middleware.js";
import { checkLoginClient } from "../middlewares/login.middleware.js";
import { isAdminClient } from "../middlewares/isadmin.middleware.js";
import { isAuth } from "../middlewares/isauth.middleware.js";
import { annulationChambre, editClient } from "../controllers/client.controller.js";

export const router = Router();

// Auth routes
router.post('/login', checkLoginClient, (req, res) => loginClient(req, res));

router.get('/user', isAuth, (req, res) => {
    res.send("Route user");
});
router.get('/admin', isAuth, isAdminClient, (req, res) => {
    res.send("Route admin");
});

router.get('/clients', isAuth, isAdminClient, (req, res) => getClients(req, res));

router.post('/clients/create', isAuth, isAdminClient, checkBodyClientInfo, (req, res) => createClient(req, res));

router.get('/clients/:id', isAuth, isAdminClient, (req, res) => getClientById(req, res));
router.post('/clients/:id/edit', isAuth, isAdminClient, (req, res) => editClient(req, res));
router.get('/clients/:id/reservation/:roomid', isAuth, isAdminClient, (req, res) => reservationChambre(req, res));
router.get('/clients/:id/annulation/:roomid', isAuth, isAdminClient, (req, res) => annulationChambre(req, res));