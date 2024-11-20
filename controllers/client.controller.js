import { getAllClients, getClient, clients, getClientToken } from "../services/client.service.js";
import { getHotelInfosRoom } from "../services/hotel.service.js";

export function getClients(req, res) {
    res.send(getAllClients());
}

export function getClientById(req, res) {
    let client = getClient(req.params.id);

    // Si on ne trouve pas le client demandé
    if (!client) {
        client = { error: 'Le client demandé est introuvable.' }
    }

    res.send(client);
}

export function editClient(req, res) {
    const client = getClient(req.params.id);

    // Si on ne trouve pas le client demandé
    if (!client) {
        client = { error: 'Le client demandé est introuvable.' }
    }

    const { name, email, phone } = req.body;

    return res.send({ success: `Vous avez modifié les informations du client ${client.name} par les nouvelles valeurs: ${name}, ${email}, ${phone}` });
}

export function reservationChambre(req, res) {
    let client = getClient(req.params.id);

    // Si on ne trouve pas le client demandé
    if (!client) {
        res.send({ error: 'Le client demandé est introuvable.' });
    } else { // Le client est trouvé
        const roomId = req.params.roomid;
        const hotelRoomData = getHotelInfosRoom(roomId);

        if (!hotelRoomData) {
            res.send({ error: 'La chambre demandé est introuvable.' });
        } else {
            res.send({ success: `Admin: ${client.name} réserve la chambre n°${roomId}, nom: ${hotelRoomData.name}`});
        }
    }
}

export function annulationChambre(req, res) {
    let client = getClient(req.params.id);

    // Si on ne trouve pas le client demandé
    if (!client) {
        res.send({ error: 'Le client demandé est introuvable.' });
    } else { // Le client est trouvé
        const roomId = req.params.roomid;
        const hotelRoomData = getHotelInfosRoom(roomId);

        if (!hotelRoomData) {
            res.send({ error: 'La chambre demandé est introuvable.' });
        } else {
            res.send({ success: `Admin: ${client.name} annule la reservation de la chambre n°${roomId}, nom: ${hotelRoomData.name}`});
        }
    }
}

export function createClient(req, res) {
    const { name, email, phone } = req.body;

    res.send({ success: `le client ${name}, ${email}, ${phone} viens d'être crée`});
}

export function loginClient(req, res) {
    const { name, password } = req.body;

    const client = clients.find(client => client.name == name && client.password == password);
    if (!client) {
        return res.status(404).json({ error: "Le client ou le mot de passe est incorrect." });
    }

    res.send(getClientToken(client));
}