import React from "react";
import { io } from "socket.io-client";
import AppNavigator from "../navigation/AppNavigator";

const socket = io("http://192.168.0.112:3000");

export default function SocketClient(props: any) {
    function sendata(data: string) {
        socket.emit("sendData", data);
    }

    socket.on("connect", () => {
        console.log("connected to: " + socket.id);
    });

    return <AppNavigator sendData={sendata} />;
}
