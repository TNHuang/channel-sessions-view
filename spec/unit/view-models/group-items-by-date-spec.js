"use strict";

import { expect } from "chai";
import ChannelSessionModel from "../../../lib/models/channel-session-model.js";
import GroupByDateModel from "../../../lib/models/group-by-date-model.js";

import generateChannelSession from "../../../lib/view-models/channel-session.js";
import generateGroupItemsByDate from "../../../lib/view-models/group-items-by-date.js";
const { 
	sessionStyle, 
	topicIconSytle,
	summaryStyle,
	instructorStyle,
	timeSlotStyle,
	groupItemsByDateStyle
} = require("../../../lib/constants");

describe("[view model] Group items by date", () => {
	let context;

	beforeEach(() => {
		context = {};
		context.entryPoint = generateGroupItemsByDate;
	});

	it("should return the correct view model metadata given a valid input of group-by-date-model", () => {
		const inputData = {
			"title":"Nulla convallis dolor quis erat.",
			"description":"Sed hendrerit luctus finibus. Sed justo dui, vulputate ac suscipit condimentum, porttitor sed dolor. Ut eu justo at metus dapibus facilisis a quis libero. Integer lectus turpis, pretium a tincidunt.",
			"instructorName":"Erat Libero",
			"instructorPhotoUrl":"https://placeholdit.imgix.net/~text?txtsize=34&txt=C&w=60&h=60",
			"subjectPhotoUrl":"https://placeholdit.imgix.net/~text?txtsize=34&txt=C&w=60&h=60",
			"time":"2016-01-03 22:00:00"
		};
		const session2Time = "2016-01-03 22:10:00";

		const expectedTimeString = "10:00 PM - 11:00 PM EDT";
		const expectedTimeString2 = "10:10 PM - 11:10 PM EDT";
		const session = new ChannelSessionModel(inputData);
		const session2 = new ChannelSessionModel(
				Object.assign({}, inputData, { time: session2Time })
			);
		const groupItems = [session, session2];
		const groupByDateModel = new GroupByDateModel(new Date(inputData.time), groupItems);
		const groupByDateTitle = groupByDateModel.getGroupDateTitle();

		const actualResult = context.entryPoint(groupByDateModel);
		const expectedResult = {
			nodeStyle: groupItemsByDateStyle.container,
			nestedNodeStyle: groupItemsByDateStyle.nestedNode,
			children: [
				{
					nodeStyle: groupItemsByDateStyle.title,
					data: groupByDateTitle
				},
				{
					nodeStyle: groupItemsByDateStyle.sessions,
					nestedNodeStyle: groupItemsByDateStyle.nestedSession, 
					children: [
						{
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
						},
						{
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
											data: expectedTimeString2
										}
									]
								}
							]
						}
					]
				}
			]
		};

		expect(actualResult).to.eql(expectedResult);
	});

	it("should return an empty object if group-by-date-model has no group items", () => {
		const groupByDateModel = new GroupByDateModel(new Date("1000-10-10 10:10:10"));

		const actualResult = context.entryPoint(groupByDateModel);
		const expectedResult = {};

		expect(actualResult).to.eql(expectedResult);
	});
});
