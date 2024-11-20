import { Router } from "express";
import { getClients, getClientById, reservationChambre, createClient, loginClient } from "../controllers/client.controller.js";
import { checkBodyClientInfo } from "../middlewares/clientinfo.middleware.js";
import { checkLoginClient } from "../middlewares/login.middleware.js";
import { annulationChambre, editClient } from "../controllers/client.controller.js";
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

router.get('/clients', isAuthWithRole('admin'), (req, res) => getClients(req, res));

router.post('/clients/create', isAuthWithRole('admin'), checkBodyClientInfo, (req, res) => createClient(req, res));

router.get('/clients/:id', isAuthWithRole('admin'), (req, res) => getClientById(req, res));
router.put('/clients/:id/edit', isAuthWithRole('admin'), (req, res) => editClient(req, res));
router.patch('/clients/:id/reservation/:roomid', isAuthWithRole('admin'), (req, res) => reservationChambre(req, res));
router.delete('/clients/:id/annulation/:roomid', isAuthWithRole('admin'), (req, res) => annulationChambre(req, res));