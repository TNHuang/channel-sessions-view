"use strict";

import { expect } from "chai";
import generateTimeSlot from "../../../lib/view-models/time-slot.js";
const { timeSlotStyle } = require("../../../lib/constants");

describe("[view model] Time slot", () => {
	let context;

	beforeEach(() => {
		context = {};
		context.entryPoint = generateTimeSlot;
	});

	it("should return the correct view model metadata for an input of DateTime object, assuming time zone is EDT and time duration is 1 hour", () => {
		const timeString = "2016-01-01 21:23:00";
		const dateTimeObject = new Date(timeString);
		const expectedTimeString = "9:23 PM - 10:23 PM EDT";

		const actualResult = context.entryPoint(dateTimeObject);
		const expectedResult = {
			nodeStyle: timeSlotStyle.container,
			children: [
				{	
					nodeStyle: timeSlotStyle.dateTime,
					data: expectedTimeString
				}
			]
		};

		expect(actualResult).to.eql(expectedResult);
	});
});
