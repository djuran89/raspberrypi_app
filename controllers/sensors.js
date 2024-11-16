const Gpio = require("pigpio").Gpio;
const sensor = require("node-dht-sensor").promises;
// const server = require("../bin/server");
// const moment = require("moment");
// const modelSensor = require("./models/sensor");
// const sendMessage = require("./lib/telefgraf");

exports.status = async (req, res, next) => {
	try {
		// const res = await sensor.read(22, 4);
		// const sensor = new Gpio(17, { mode: Gpio.INPUT });

		// const resault = sensor.digitalRead();

		sensorLib.read(11, 17, function (err, temperature, humidity) {
			if (!err) return res.status(200).json({ temperature, humidity });
			if (err) return res.status(500).json({ error: err });
		});
	} catch (err) {
		next(err);
	}
};

// const minutes = 1;
// const interval = 1000 * 60 * minutes;

// // // Config
// const maxTemperatureForLamp = 24;
// const minTemperatureForLamp = 18;

// // // Temperatura i vlažnost vazduha
// const temperaturGpio = 17;
// const moistureGpio = 21;
// const moistureSensor = new Gpio(moistureGpio, { mode: Gpio.INPUT });

// // // Definišemo pinove na koje su povezani releji
// const relay1 = new Gpio(23, { mode: Gpio.OUTPUT });
// // Funkcija za paljenje i gašenje releja
// // ON -> 0
// // OFF -> 1
// const switchRelay = (relay, state) => relay.digitalWrite(state);
// const readRelayState = (relay) => relay.digitalRead();

// // Automacki ugasiti relej
// switchRelay(relay1, 1);

// const app = {
// 	sensors: [{ name: "Garden", type: 11, pin: temperaturGpio }],
// 	read: async function () {
// 		try {
// 			for (var sensor in this.sensors) {
// 				var readout = sensorLib.read(this.sensors[sensor].type, this.sensors[sensor].pin);

// 				// Check if temperature is in range
// 				controlTemperature(readout.temperature);

// 				const soilMeasure = moistureSensor.digitalRead();
// 				const isSoilWet = soilMeasure === 1 ? "Wet" : "Dry";
// 				const lampStatus = readRelayState(relay1);
// 				const isLampOn = lampStatus === 0 ? "ON" : "OFF";
// 				const room = this.sensors[sensor].name;
// 				const humidity = readout.humidity.toFixed(1);
// 				const temperature = readout.temperature.toFixed(1);

// 				const previesValue = await modelSensor.findOne().sort({ timestamp: -1 });

// 				// Check if soil is wet
// 				controlSoilHumidity(isSoilWet, previesValue);

// 				modelSensor.create({
// 					name: room,
// 					timestamp: moment().format(),
// 					interval: minutes,
// 					temperature: temperature,
// 					air_humidity: humidity,
// 					soil_humidity: isSoilWet,
// 					soil_humidity_status: soilMeasure,
// 					ralay_1: isLampOn,
// 					ralay_1_status: lampStatus,
// 				});

// 				const message = `[${room}] temperature: ${temperature}°C, humidity: ${humidity}%, soil: ${isSoilWet}, lamp: ${isLampOn}`;
// 				console.log(message);
// 			}
// 		} catch (err) {
// 			console.error(err);
// 			sendMessage(err);
// 		}
// 	},
// 	run: () => setInterval(() => app.read(), interval),
// };

// // START APPP
// let startAppInterval;
// app.connect()
// 	.then(() => {
// 		startAppInterval = setInterval(() => {
// 			const shouldAppStart = moment().seconds() === 0;

// 			if (shouldAppStart) {
// 				// Start app and clear interval
// 				app.run();
// 				console.log("Application started");
// 				sendMessage("Application started");
// 				clearInterval(startAppInterval);
// 			}
// 		}, 1000);
// 	})
// 	.catch((err) => {
// 		console.error(`Application stopped: ${err}`);
// 		startAppInterval && clearInterval(startAppInterval);
// 	});

// // CONTROLS
// function controlTemperature(temperature) {
// 	const isLampOn = readRelayState(relay1) === 0;
// 	if (temperature > maxTemperatureForLamp && isLampOn) {
// 		switchRelay(relay1, 1);
// 		console.log("Lamp is off");
// 	}
// 	if (temperature <= minTemperatureForLamp && !isLampOn) {
// 		switchRelay(relay1, 0);
// 		console.log("Lamp is on");
// 	}
// }

// function controlSoilHumidity(soilHumidity, previesValue) {
// 	if (previesValue.soil_humidity === soilHumidity) return;
// 	if (soilHumidity === "Dry") sendMessage("Soil is dry, please water the plant");
// }
