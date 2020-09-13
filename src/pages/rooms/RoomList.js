import React, { Component } from "react";
import { Table } from "react-bootstrap/cjs";
import { Button } from "react-bootstrap";
const RoomList = (props) => {
    const { rooms, handleShowDetails, showModal, deleteRoom } = props;
    let room = rooms.map((room, index) => {
        return (
            <tr key={room.id}>
                <td>{index + 1}</td>
                <td>{room.roomName}</td>
                <td>{room.price}</td>
                <td>{room.status}</td>
                <td>
                    <Button
                        // disabled={!buttonEdit}
                        variant="primary"
                        onClick={() => {
                            handleShowDetails(room);
                        }}
                    >
                        Edit
                    </Button>
                </td>
                <td>
                    <Button
                        variant="primary"
                        onClick={(event) => {
                            deleteRoom(event, room.id);
                        }}
                    >
                        Delete
                    </Button>
                </td>
            </tr>
        );
    });
    return (
        <div style={{ marginTop: 10 }}>
            <Button
                variant="primary"
                onClick={(event) => {
                    console.log("ini tombol");
                    showModal();
                }}
            >
                Tambah
            </Button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Room Name</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th colSpan="2">Action</th>
                    </tr>
                </thead>
                <tbody>{room}</tbody>
            </Table>
        </div>
    );
};
export default RoomList;
