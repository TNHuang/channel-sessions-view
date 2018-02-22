"use strict";

import { expect } from "chai";
import generateTopicIcon from "../../../lib/view-models/topic-icon.js";
const { containerStyle, imageStyle } = require("../../../lib/constants.js").topicIconSytle;

describe("[view model] Topic icon", () => {
	let context;

	beforeEach(() => {
		context = {};
		context.entryPoint = generateTopicIcon;
	});

	it("should return the correct view model metadata for a given input of topic iron url", () => {
		const topicIconUrl = "Test topic icon url";

		const actualResult = context.entryPoint(topicIconUrl);
		const expectedResult = {
			nodeStyle: containerStyle,
			children: [
				{
					nodeStyle: imageStyle,
					src: topicIconUrl
				}
			]
		};

		expect(actualResult).to.eql(expectedResult);
	});
});
