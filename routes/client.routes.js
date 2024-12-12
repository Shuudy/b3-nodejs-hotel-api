import { Router } from "express";
import { getClients, getClientById, reservationChambre, createClient } from "../controllers/client.controller.js";
import { checkBodyClientInfo } from "../middlewares/clientinfo.middleware.js";
import { annulationChambre, editClient } from "../controllers/client.controller.js";
import { isAuthWithRole } from "../middlewares/isauthwithrole.middleware.js";

export const router = Router();

router.get('/', isAuthWithRole('admin'), (req, res) => getClients(req, res));

router.post('/', isAuthWithRole('admin'), checkBodyClientInfo, (req, res) => createClient(req, res));

router.get('/:id', isAuthWithRole('admin'), (req, res) => getClientById(req, res));
router.put('/:id', isAuthWithRole('admin'), checkBodyClientInfo, (req, res) => editClient(req, res));
router.patch('/:id/reservations/:roomid', isAuthWithRole('admin'), (req, res) => reservationChambre(req, res));
router.delete('/:id/reservations/:roomid', isAuthWithRole('admin'), (req, res) => annulationChambre(req, res));