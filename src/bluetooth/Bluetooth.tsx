import { assert } from "console";
import React from "react";
import { useEffect } from "react";
import { View } from "react-native";
import { BleManager, Device } from "react-native-ble-plx";

const pianoBluetoothName = "tempName";

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
            })
            .catch((error) => {
                console.error("Error while connecting to device");
                console.log(error);
                //Retry
                Connect(d);
            });
    }

    function SendData() {
        //manager.read("aa");
    }

    function ReadData() {}

    return null;
}
