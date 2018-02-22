"use strict";

const { numberToWeekDay, numberToMonth } = require("../constants.js");

// day, month, date, year
export default function formatGroupDate(dateTimeObject) {

	const day = dateTimeObject.getDay();
	const dayString = numberToWeekDay[day];
	const prefixDay = dayString.substring(0, 3);

	const month = dateTimeObject.getMonth();
	const monthString = numberToMonth[month];

	const date = dateTimeObject.getDate();
	const year = dateTimeObject.getFullYear();
	return `${prefixDay}, ${monthString} ${date}, ${year}`;
}