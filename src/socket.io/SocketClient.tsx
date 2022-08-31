import React from "react";
import { io } from "socket.io-client";
import AppNavigator from "../navigation/AppNavigator";

const socket = require("socket.io-client")("http://192.168.0.113:3000");

export default function SocketClient(props: any) {
    function sendata(data: string) {
        socket.emit("sendData", data);
    }

    console.log("Initializing socket client");
    socket.on("serverToReact", (data: any) => {
        console.log("received data from server: " + JSON.stringify(data));
    });

    return <AppNavigator sendData={sendata} />;
}
