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

export function reservationChambre(req, res) {

    const roomId = req.params.id;
    const hotelRoomData = getHotelInfosRoom(roomId);

    if (!hotelRoomData) {
        res.send({ error: 'Cette chambre n\'existe pas.' });
    }

    return res.send({ success: `${req.client.name} vous avez réservé la chambre n°${roomId}, nom: ${hotelRoomData.name}`});
}

export function annulationChambre(req, res) {

    const roomId = req.params.id;
    const hotelRoomData = getHotelInfosRoom(roomId);

    if (!hotelRoomData) {
        res.send({ error: 'Cette chambre n\'existe pas.' });
    }
    // On pourrais vérifier si le client a bien cette chambre qui est réserver pour lui.
    return res.send({ success: `${req.client.name} vous avez annulé la reservation de la chambre n°${roomId}, nom: ${hotelRoomData.name}`});
}