"use strict";

import { expect } from "chai";
import formatGroupDate from "../../../lib/plugins/format-group-date.js";

describe("[plugins] Format group date", () => {
	let context;

	beforeEach(() => {
		context = {};
		context.entryPoint = formatGroupDate;
	});

	it("should return 'Sun, January 3, 2016' given an input of 2016-01-03 22:00:00 datetime object", () => {
		const inputDateTimeObj = new Date("2016-01-03 22:00:00");

		const actualResult = context.entryPoint(inputDateTimeObj);
		const expectedResult = "Sun, January 3, 2016";

		expect(actualResult).to.eql(expectedResult);
	});
});
