"use strict";

import convertArmyTimeToNormalTime from "../plugins/convert-army-time-to-normal-time.js";
const { timeSlotStyle } = require("../constants");

export default function generateTimeSlot(dataTimeObject) {
	const hours = dataTimeObject.getHours();
	const minutes = dataTimeObject.getMinutes();

	const startTime = convertArmyTimeToNormalTime(hours, minutes);
	const endTime = convertArmyTimeToNormalTime((hours + 1), minutes);
	const formattedTimeOutput = `${startTime} - ${endTime} EDT`;

	return {
		nodeStyle: timeSlotStyle.container,
		children: [
			{	
				nodeStyle: timeSlotStyle.dateTime,
				data: formattedTimeOutput
			}
		]
	};
}
