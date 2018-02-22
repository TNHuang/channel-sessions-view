"use strict";

function shouldDefaultHoursTo12(hours) {
	return !(hours % 12);
}

export default function convertArmyTimeToNormalTime(hours = 0, minutes = 0) {
	const formattedHours = shouldDefaultHoursTo12(hours) ? 12 : hours % 12;
	const formattedMinutes = `${minutes || 0}`.padStart(2, "0");
	const meridiem = hours < 12 || hours === 24 ? "AM" :  "PM";

	return `${formattedHours}:${formattedMinutes} ${meridiem}`;
}
