import { assert } from "console";
import React from "react";
import { useEffect } from "react";
import { View } from "react-native";
import { BleManager } from "react-native-ble-plx";

const pianoBluetoothName = "blueToothPiano";

export default function Bluetooth() {
    let manager: BleManager | null = null;

    useEffect(() => {
        manager = new BleManager();
    }, []);

    useEffect(() => {
        const subscription = manager!.onStateChange((state) => {
            if (state === "PoweredOn") {
                scanAndConnect();
                subscription.remove();
            }
        }, true);
        return () => subscription.remove();
    }, [manager]);

    function scanAndConnect() {
        manager!.startDeviceScan(null, null, (error, device) => {
            if (error) {
                // Handle error (scanning will be stopped automatically)
                return;
            }

            if (device?.name === pianoBluetoothName) {
                manager!.stopDeviceScan();

                device
                    .connect()
                    .then((device) => {
                        return device.discoverAllServicesAndCharacteristics();
                    })
                    .then((device) => {
                        // TODO: Do work on device with services and characteristics
                    })
                    .catch((error) => {
                        // TODO: Handle errors
                    });
            }

            console.log(device?.name);
        });
    }

    return null;
}
