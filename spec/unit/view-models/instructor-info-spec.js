"use strict";

import { expect } from "chai";
import generateInstructorInfo from "../../../lib/view-models/Instructor-info.js";
const { instructorStyle } = require("../../../lib/constants");

describe("[view model] Instructor-info", () => {
	let context;

	beforeEach(() => {
		context = {};
		context.entryPoint = generateInstructorInfo;
	});

	it("should return the correct view model metadata for a given input of instructor name and instructor photo url", () => {
		const instructorName = "Test intstructor name";
		const instructorPhotoUrl = "Test instructor photo url";

		const actualResult = context.entryPoint(instructorName, instructorPhotoUrl);
		const expectedResult = {
			nodeStyle: instructorStyle.container,
			nestedNodeStyle: instructorStyle.nestedNode,
			children: [
				{
					nodeStyle: instructorStyle.photo,
					src: instructorPhotoUrl
				},
				{	
					nodeStyle: instructorStyle.instructorName,
					data: instructorName
				}
			]
		};

		expect(actualResult).to.eql(expectedResult);
	});
});
