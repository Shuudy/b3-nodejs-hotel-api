import clientsJson from "../data_hotel/clients.json" assert { type: "json" };
import jwt from 'jsonwebtoken';

export function getAllClients() {
    return clientsJson.clients;
}

export function getClient(id) {
    return clientsJson.clients.find(client => client.id == id);
}

export function getClientToken(client) {
    return jwt.sign({ id: client.id, name: client.name, role: client.role }, process.env.JWT_SECRET);
}

export const clients = [
    {
        id: 1,
        name: "John",
        password: "Bonjour",
        role: "admin"
    },
    {
        id: 2,
        name: "Alex",
        password: "Bonjour",
        role: "user"
    }
];