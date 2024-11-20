import { Router } from "express";
import { getHotel, getHotelChambres, getHotelChambre, reservationChambre, annulationChambre} from "../controllers/hotel.controller.js";
import { isAuth } from "../middlewares/isauth.middleware.js";

export const router = Router();

router.get('/hotel', isAuth, (req, res) => getHotel(req, res));
router.get('/hotel/chambres', isAuth, (req, res) => getHotelChambres(req, res));
router.get('/hotel/chambres/:id', isAuth, (req, res) => getHotelChambre(req, res));
router.get('/hotel/chambres/:id/reservation', isAuth, (req, res) => reservationChambre(req, res));
router.get('/hotel/chambres/:id/annulation', isAuth, (req, res) => annulationChambre(req, res));