"use strict";

import { expect } from "chai";
import CollectionOfDateGroupModel from "../../../lib/models/collection-of-date-group-model.js";

function isSortByDate(items) {
	const itemLength = items.length;

	if (items <= 1) { return true; }
	let sortEvaluationFunc;

	if (items[0].getGroupDate) {
		sortEvaluationFunc = (index) => {
			const currentItem = items[idx+1];
			const priorItem = items[idx];

			if (priorItem.getGroupDate().valueOf() > currentItem.getGroupDate().valueOf()) {
				return false;
			}
		} 
	} else {
		sortEvaluationFunc = (index) => {
			const currentItem = items[idx+1];
			const priorItem = items[idx];

			if (priorItem.getDateTime().valueOf() > currentItem.getDateTime().valueOf()) {
				return false;
			}
		} 
	}

	let idx = itemLength-1;

	while (idx--) { sortEvaluationFunc(idx); } 

	return true;
}

describe("[models] Collection of date group model", () => {
	let context;

	beforeEach(() => {
		context = {};
		context.inputSessions = [
			{
				"title":"Test title 1 group 1",
				"description":"Test description",
				"instructorName":"Test instructor name",
				"instructorPhotoUrl":"Test instructor url",
				"subjectPhotoUrl":"Test topic photo url",
				"time":"2016-01-03 22:00:00"
			},
			{
				"title":"Test title 1 group 2",
				"description":"Test description",
				"instructorName":"Test instructor name",
				"instructorPhotoUrl":"Test instructor url",
				"subjectPhotoUrl":"Test topic photo url",
				"time":"2016-02-01 10:00:00"
			},
			{
				"title":"Test title 2 group 2",
				"description":"Test description",
				"instructorName":"Test instructor name",
				"instructorPhotoUrl":"Test instructor url",
				"subjectPhotoUrl":"Test topic photo url",
				"time":"2016-02-01 19:00:00"
			}
		];

		context.entryObject = new CollectionOfDateGroupModel(context.inputSessions);
	});

	it("should return the collection's date group CollectionOfDateGroup::getDateGroups() is called", () => {
		const actualResult = context.entryObject.getDateGroups();
		const firstGroup = actualResult[0];
		const secondGroup = actualResult[1];

		expect(actualResult.length).to.eq(2);
		expect(firstGroup.getGroupDate().getMonth()).to.eq(0);
		expect(firstGroup.getGroupDate().getDate()).to.eq(3);
		expect(firstGroup.getGroupItems().length).to.eq(1);
		expect(firstGroup.getGroupDateTitle()).to.eq("Sun, January 3, 2016");

		expect(secondGroup.getGroupDate().getMonth()).to.eq(1);
		expect(secondGroup.getGroupDate().getDate()).to.eq(1);
		expect(secondGroup.getGroupItems().length).to.eq(2);
		expect(secondGroup.getGroupDateTitle()).to.eq("Mon, February 1, 2016");
	});

	it("resultant date groups should be sort by date", () => {
		const dateGroups = context.entryObject.getDateGroups();
		const isGroupSorted = isSortByDate(dateGroups);

		expect(isGroupSorted).to.be.true;
	});

	it("sessions within date group should also be sort by date", () => {
		const dateGroups = context.entryObject.getDateGroups();
		const firstGroupItems = dateGroups[0].getGroupItems();
		const secondGroupItems = dateGroups[1].getGroupItems();

		const expectedResult = {
			isFirstGroupSorted: true,
			isSecondGroupSorted: true
		};
		const actualResult = {
			isFirstGroupSorted: isSortByDate(firstGroupItems),
			isSecondGroupSorted: isSortByDate(firstGroupItems)
		}

		expect(actualResult).to.be.eql(expectedResult);
	});
});
