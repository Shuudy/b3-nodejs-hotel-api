import { Router } from "express";
import { getHotel, getHotelChambres, getHotelChambre, reservationChambre, annulationChambre} from "../controllers/hotel.controller.js";
import { isAuthWithRole } from "../middlewares/isauthwithrole.middleware.js";

export const router = Router();

router.get('/hotel', isAuthWithRole(), (req, res) => getHotel(req, res));
router.get('/hotel/chambres', isAuthWithRole(), (req, res) => getHotelChambres(req, res));
router.get('/hotel/chambres/:id', isAuthWithRole(), (req, res) => getHotelChambre(req, res));
router.patch('/hotel/chambres/:id/reservation', isAuthWithRole(), (req, res) => reservationChambre(req, res));
router.delete('/hotel/chambres/:id/reservation', isAuthWithRole(), (req, res) => annulationChambre(req, res));