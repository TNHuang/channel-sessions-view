"use strict";

import { expect } from "chai";
import generateSummary from "../../../lib/view-models/summary.js";

const { summaryStyle } = require("../../../lib/constants.js"); 

describe("[view model] Summary", () => {
	let context;

	beforeEach(() => {
		context = {};
		context.entryPoint = generateSummary;
	});

	it("should return the correct view model metadata for a given input of title and summary", () => {
		const title = "Test Course Title";
		const summary = "Test Course Sumamry";

		const actualResult = context.entryPoint(title, summary);
		const expectedResult = {
			nodeStyle: summaryStyle.container,
			children: [
				{
					nodeStyle: summaryStyle.title,
					data: title
				},
				{
					nodeStyle: summaryStyle.summary,
					data: summary
				}
			]
		};

		expect(actualResult).to.eql(expectedResult);
	});
});