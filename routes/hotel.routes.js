import { Router } from "express";
import { getHotel, getHotelChambres, getHotelChambre} from "../controllers/hotel.controller.js";

export const router = Router();

router.get('/hotel', (req, res) => getHotel(req, res));
router.get('/hotel/chambres', (req, res) => getHotelChambres(req, res));
router.get('/hotel/chambres/:id', (req, res) => getHotelChambre(req, res));