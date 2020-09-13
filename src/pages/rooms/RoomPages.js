import React, { Component, useState, useEffect } from "react";
import {
    getRooms,
    pushRoom,
    delRoom,
    putRoom,
} from "../../api/roomsApi/RoomServices";
import RoomList from "./RoomList";
import RoomModal from "./RoomModal";

const RoomPage = () => {
    const loadData = () => {
        let token = sessionStorage.getItem("auth-token");
        getRooms(token)
            .then((rooms) => {
                console.log("ini get rooms", rooms.data.status);
                if (rooms.data.status === 200) {
                    setRooms(rooms.data.result);
                }
            })
            .catch((error) => {
                console.error(error);
            });
    };
    const [showDetails, setShowDetails] = useState(false);
    const [rooms, setRooms] = useState([]);
    const [edited, setEdited] = useState(true);
    const [selectedRoom, setSelectedRoom] = useState({});

    const showModal = () => {
        console.log(rooms);
        console.log("showmodal");
        setShowDetails(!showDetails);
        setEdited(true);
    };
    const handleShowDetails = (room) => {
        setShowDetails(!showDetails);
        setEdited(false);
        setSelectedRoom({ ...room });
    };
    const hideDetails = () => {
        setShowDetails(!showDetails);
        setEdited(true);
        setSelectedRoom({});
    };

    const handleChange = (event, field) => {
        const { name, value } = event.target;
        setSelectedRoom({ ...selectedRoom, [name]: value });
        console.log(selectedRoom);
    };

    const createRoom = (event) => {
        event.preventDefault();
        event.target.className += " was-validated";
        let token = sessionStorage.getItem("auth-token");

        if (edited === true) {
            pushRoom(selectedRoom, token)
                .then((res) => {
                    if (res.data.status === 202) {
                        console.log("result", res);
                        hideDetails();
                        alert("input berhasil");
                        loadData();
                    }
                })
                .catch((error) => {
                    console.error(error);
                });
        } else {
            putRoom(selectedRoom, token)
                .then((res) => {
                    if (res.data.status === 202) {
                        hideDetails();
                        alert("update berhasil");
                        loadData();
                    }
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    };

    const deleteRoom = (event, id) => {
        event.preventDefault();
        let token = sessionStorage.getItem("auth-token");
        delRoom(id, token)
            .then((res) => {
                if (res.data.status === 202) {
                    alert(`${res} delete berhasil`);
                    loadData();
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };
    useEffect(() => {
        loadData();
    }, []);

    return (
        <div className="container-fluid">
            <div className="row col-md-12 justify-content-center">
                <div className="col-md-7">
                    <RoomList
                        showModal={showModal}
                        rooms={rooms}
                        handleShowDetails={handleShowDetails}
                        deleteRoom={deleteRoom}
                    />
                    {!showDetails ? null : (
                        <RoomModal
                            handleChange={handleChange}
                            showDetails={showDetails}
                            selectedRoom={selectedRoom}
                            hideDetails={hideDetails}
                            createRoom={createRoom}
                            edited={edited}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default RoomPage;
