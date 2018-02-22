"use strict";

import { expect } from "chai";
import covnertArmyTimeToNormalTime from "../../../lib/plugins/convert-army-time-to-normal-time.js";

describe("[plugins] Convert army time to normal time", () => {
	let context;

	beforeEach(() => {
		context = {};
		context.entryPoint = covnertArmyTimeToNormalTime;
	});

	it("should default to 12:00 AM if user did not enter any hours or minutes", () => {
		const actualResult = context.entryPoint();
		const expectedResult = "12:00 AM";

		expect(actualResult).to.eql(expectedResult);
	});

	it("should return 9:12 PM if user input 21 hours and 34 minutes", () => {
		const hours = 21;
		const minutes = 34;

		const actualResult = context.entryPoint(hours, minutes);
		const expectedResult = "9:34 PM";

		expect(actualResult).to.eql(expectedResult);
	});

	it("should pad the mintues with 0 and return 9:01 PM if user input 21 hours and 01 minutes", () => {
		const hours = 21;
		const minutes = 1;

		const actualResult = context.entryPoint(hours, minutes);
		const expectedResult = "9:01 PM";

		expect(actualResult).to.eql(expectedResult);
	});

	it("should return 9:23 AM if user input 9 hours and 23 minutes", () => {
		const hours = 9;
		const minutes = 23;

		const actualResult = context.entryPoint(hours, minutes);
		const expectedResult = "9:23 AM";

		expect(actualResult).to.eql(expectedResult);
	});

	it("should return 12:00 AM if user input 24 hours and 00 minutes", () => {
		const hours = 24;
		const minutes = 0;

		const actualResult = context.entryPoint(hours, minutes);
		const expectedResult = "12:00 AM";

		expect(actualResult).to.eql(expectedResult);
	});

	it("should return 12:00 AM if user input 00 hours and 00 minutes", () => {
		const hours = 0;
		const minutes = 0;

		const actualResult = context.entryPoint(hours, minutes);
		const expectedResult = "12:00 AM";

		expect(actualResult).to.eql(expectedResult);
	});

	it("should return 12:00 PM if user input 12 hours and 00 minutes", () => {
		const hours = 12;
		const minutes = 0;

		const actualResult = context.entryPoint(hours, minutes);
		const expectedResult = "12:00 PM";

		expect(actualResult).to.eql(expectedResult);
	});
});
