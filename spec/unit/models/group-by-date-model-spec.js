"use strict";

import { expect } from "chai";
import GroupByDateModel from "../../../lib/models/group-by-date-model.js";

describe("[models] Group By Date Model", () => {
	let context;

	beforeEach(() => {
		context = {};
		context.inputDateTimeString = "2016-01-03 22:00:00";
		context.entryObject = new GroupByDateModel(
				new Date(context.inputDateTimeString)
			);
	});

	it("should return  when GroupByDate::getGroupDateTitle() is called", () => {
		const actualResult = context.entryObject.getGroupDateTitle();
		const expectedResult = "Sun, January 3, 2016";

		expect(actualResult).to.eql(expectedResult);
	});

	it("should return an empty array when GroupByDate::getGroupItems() is called, if the object has no group items", () => {
		const actualResult = context.entryObject.getGroupItems();
		const expectedResult = [];

		expect(actualResult).to.eql(expectedResult);
	});

	it("should return instructor name when GroupByDate::addGroupItem() is called", () => {
		context.entryObject
			.addGroupItem("sample item")
			.addGroupItem("another sample item");

		const actualResult = context.entryObject.getGroupItems();
		const expectedResult = ["sample item", "another sample item"];

		expect(actualResult).to.eql(expectedResult);
	});

	it("should return a date time object when GroupByDate::getGroupDate() is called", () => {
		const actualResultObject = context.entryObject.getGroupDate();
		const expectedResultObject = new Date(context.inputDateTimeString);

		expect(actualResultObject.getMonth()).to.eql(expectedResultObject.getMonth());
		expect(actualResultObject.getDate()).to.eql(expectedResultObject.getDate());
		expect(actualResultObject.getDay()).to.eql(expectedResultObject.getDay());
		expect(actualResultObject.getFullYear()).to.eql(expectedResultObject.getFullYear());
	});
});
