import hotelJson from "../data_hotel/hotel.json" assert { type: "json" };

export function getHotelInfosExceptRooms() {
    const { rooms, ...hotelExceptRooms } = hotelJson;
    return hotelExceptRooms;
}

export function getHotelInfosRooms() {
    return hotelJson.rooms;
}

export function getHotelInfosRoom(id) {
    return hotelJson.rooms.find(room => room.id == id)
}