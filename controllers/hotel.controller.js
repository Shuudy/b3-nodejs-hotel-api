import { getHotelInfosExceptRooms, getHotelInfosRoom, getHotelInfosRooms } from "../services/hotel.service.js";

export function getHotel(req, res) {
    res.send(getHotelInfosExceptRooms());
}

export function getHotelChambres(req, res) {
    res.send(getHotelInfosRooms());
}

export function getHotelChambre(req, res) {

    let hotelInfosRoom = getHotelInfosRoom(req.params.id);

    if (!hotelInfosRoom) {
        hotelInfosRoom = { error: 'Cette chambre n\'existe pas.' }
    }

    res.send(hotelInfosRoom);
}