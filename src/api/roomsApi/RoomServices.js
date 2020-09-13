import React from "react";
import axios from "axios";
const baseURLs = "/rooms";
const baseURL = "/room";
const getRooms = async (token) => {
    let rooms = await axios.get(baseURLs, {
        headers: { Authorization: `Bearer ${token}` },
    });

    return await rooms;
};
const pushRoom = async (data, token) => {
    let room = await axios.post(baseURL, data, {
        headers: { Authorization: `Bearer ${token}` },
    });
    return await room;
};

const delRoom = async (id, token) => {
    let room = await axios.delete(`${baseURL}/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
    });
    return await room;
};

const putRoom = async (data, token) => {
    let room = await axios.put(baseURL, data, {
        headers: { Authorization: `Bearer ${token}` },
    });
    return await room;
};
export { getRooms, pushRoom, delRoom, putRoom };
// import axios from 'axios'
// export const getProducts = async function () {
//     let products = await axios.get("http://localhost:3000/products")
//     return products
// }
