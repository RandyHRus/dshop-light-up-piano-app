/*
! No longer using bluetooth.
import { assert } from "console";
import React from "react";
import { useEffect } from "react";
import { View } from "react-native";
import {
    BleError,
    BleManager,
    Characteristic,
    Device,
} from "react-native-ble-plx";

const pianoBluetoothName = "raspberrypi";
const serviceUUID = "00001108-0000-1000-8000-00805f9b34fb";
const characteristicUUID = "00001108-0000-1000-8000-00805f9b34fb";

export default function Bluetooth() {
    let manager: BleManager;

    useEffect(() => {
        manager = new BleManager();
    }, []);

    useEffect(() => {
        const subscription = manager.onStateChange((state) => {
            if (state === "PoweredOn") {
                scanAndConnect();
                subscription.remove();
            }
        }, true);
        return () => subscription.remove();
    }, [manager!]);

    function scanAndConnect() {
        console.log("Starting scan");

        manager!.startDeviceScan(null, null, (error, device) => {
            if (error) {
                // Handle error (scanning will be stopped automatically)
                console.error("Stopping scan due to error");
                console.log(error);
                return;
            }

            console.log(device);
            if (device && device.name) console.log(device.name);

            if (device?.name === pianoBluetoothName) {
                manager!.stopDeviceScan();
                console.log("Stopping scan");
                Connect(device);
            }
        });
    }

    function Connect(d: Device) {
        console.log("Attempting to connect to device " + pianoBluetoothName);

        d.connect()
            .then((device) => {
                console.log("Connected to device " + pianoBluetoothName);
                console.log("Attempting to retrive device information");
                return device.discoverAllServicesAndCharacteristics();
            })
            .then((device) => {
                console.log("Retrieved services and characteristics of device");
                console.log(device);
                StartReadData(d);
            })
            .catch((error) => {
                console.error("Error while connecting to device");
                console.log(error);
                //Retry
                Connect(d);
            });
    }

    function SendData() {}

    function StartReadData(d: Device) {
        manager.monitorCharacteristicForDevice(
            d.id,
            serviceUUID,
            characteristicUUID,
            OnMonitorDataReceived
        );
    }

    function OnMonitorDataReceived(
        error: BleError | null,
        characteristic: Characteristic | null
    ) {
        console.log("Data received: " + characteristic?.read());
    }

    return null;
}
*/
