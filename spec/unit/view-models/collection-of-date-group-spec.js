"use strict";

import { expect } from "chai";
import generateCollectionOfDateGroup from "../../../lib/view-models/collection-of-date-group.js";
import CollectionOfDateGroup from "../../../lib/models/collection-of-date-group-model.js";
const { 
	sessionStyle, 
	topicIconSytle,
	summaryStyle,
	instructorStyle,
	timeSlotStyle,
	groupItemsByDateStyle,
	collectionOfDateGroupStyle
} = require("../../../lib/constants");

describe("[view-model] Collection of date group", () => {
	let context;

	beforeEach(() => {
		context = {};
		context.entryPoint = generateCollectionOfDateGroup;
	});

	it("should generate valid view model metadata given an input of collection-of-date-group model", () => {
		const inputData = {
			"title":"Nulla convallis dolor quis erat.",
			"description":"Sed hendrerit luctus finibus. Sed justo dui, vulputate ac suscipit condimentum, porttitor sed dolor. Ut eu justo at metus dapibus facilisis a quis libero. Integer lectus turpis, pretium a tincidunt.",
			"instructorName":"Erat Libero",
			"instructorPhotoUrl":"https://placeholdit.imgix.net/~text?txtsize=34&txt=C&w=60&h=60",
			"subjectPhotoUrl":"https://placeholdit.imgix.net/~text?txtsize=34&txt=C&w=60&h=60",
			"time":"2016-01-03 22:00:00"
		};
		const expectedTimeString = "10:00 PM - 11:00 PM EDT";
		const expectedDateGroupTitle = "Sun, January 3, 2016";
		const collectionModel = new CollectionOfDateGroup([inputData]);
		const actualResult = context.entryPoint(collectionModel);
		const expectedResult = {
			nodeStyle: collectionOfDateGroupStyle.container,
			children: [
				{
					nodeStyle: groupItemsByDateStyle.container,
					nestedNodeStyle: groupItemsByDateStyle.nestedNode,
					children: [
						{
							nodeStyle: groupItemsByDateStyle.title,
							data: expectedDateGroupTitle
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
								}
							]
						}
					]
				}
			]
		};

		expect(actualResult).to.eql(expectedResult);
	});
});