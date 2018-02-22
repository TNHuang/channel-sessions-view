"use strict";

import { expect } from "chai";
import ChannelSessionModel from "../../../lib/models/channel-session-model.js";
import generateChannelSession from "../../../lib/view-models/channel-session.js";
const { 
	sessionStyle, 
	topicIconSytle,
	summaryStyle,
	instructorStyle,
	timeSlotStyle
} = require("../../../lib/constants");

describe("[view model] Channel session", () => {
	let context;

	beforeEach(() => {
		context = {};
		context.entryPoint = generateChannelSession;
	});

	it("should return the correct view model metadata given a valid input of channel session model object", () => {
		const inputData = {
			"title":"Nulla convallis dolor quis erat.",
			"description":"Sed hendrerit luctus finibus. Sed justo dui, vulputate ac suscipit condimentum, porttitor sed dolor. Ut eu justo at metus dapibus facilisis a quis libero. Integer lectus turpis, pretium a tincidunt.",
			"instructorName":"Erat Libero",
			"instructorPhotoUrl":"https://placeholdit.imgix.net/~text?txtsize=34&txt=C&w=60&h=60",
			"subjectPhotoUrl":"https://placeholdit.imgix.net/~text?txtsize=34&txt=C&w=60&h=60",
			"time":"2016-01-03 22:00:00"
		};
		const expectedTimeString = "10:00 PM - 11:00 PM EDT";
		const session = new ChannelSessionModel(inputData);

		const actualResult = context.entryPoint(session);
		const expectedResult = {
			nodeStyle: sessionStyle.container,
			nestedNodeStyle: sessionStyle.nestedNode,
			className: sessionStyle.className,
			children: [
				{
					nodeStyle: topicIconSytle.containerStyle,
					children: [
						{
							nodeStyle: topicIconSytle.imageStyle,
							src: inputData.subjectPhotoUrl
						}
					]
				},
				{
					nodeStyle: summaryStyle.container,
					children: [
						{
							nodeStyle: summaryStyle.title,
							data: inputData.title
						},
						{
							nodeStyle: summaryStyle.summary,
							data: inputData.description
						}
					]
				},
				{
					nodeStyle: instructorStyle.container,
					nestedNodeStyle: instructorStyle.nestedNode,
					children: [
						{
							nodeStyle: instructorStyle.photo,
							src: inputData.instructorPhotoUrl
						},
						{	
							nodeStyle: instructorStyle.instructorName,
							data: inputData.instructorName
						}
					]
				},
				{
					nodeStyle: timeSlotStyle.container,
					children: [
						{	
							nodeStyle: timeSlotStyle.dateTime,
							data: expectedTimeString
						}
					]
				}
			]
		};

		expect(actualResult).to.eql(expectedResult);
	});
});
