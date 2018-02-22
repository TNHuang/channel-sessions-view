"use strict";

import { expect } from "chai";
import ChannelSession from "../../../lib/models/channel-session-model.js";

describe("[models] Channel Session Model", () => {
	let context;

	beforeEach(() => {
		context = {};
		context.inputJSON = {
			"title":"Test title",
			"description":"Test description",
			"instructorName":"Test instructor name",
			"instructorPhotoUrl":"Test instructor url",
			"subjectPhotoUrl":"Test topic photo url",
			"time":"2016-01-03 22:00:00"
		};

		context.entryObject = new ChannelSession(context.inputJSON);
	});

	it("should return title when ChannelSession::getTitle() is called", () => {
		const actualResult = context.entryObject.getTitle();
		const expectedResult = context.inputJSON.title;

		expect(actualResult).to.eql(expectedResult);
	});

	it("should return description when ChannelSession::getDescription() is called", () => {
		const actualResult = context.entryObject.getDescription();
		const expectedResult = context.inputJSON.description;

		expect(actualResult).to.eql(expectedResult);
	});

	it("should return instructor name when ChannelSession::getInstructorName() is called", () => {
		const actualResult = context.entryObject.getInstructorName();
		const expectedResult = context.inputJSON.instructorName;

		expect(actualResult).to.eql(expectedResult);
	});

	it("should return instructor photo url when ChannelSession::getInstructPhotoUrl() is called", () => {
		const actualResult = context.entryObject.getInstructPhotoUrl();
		const expectedResult = context.inputJSON.instructorPhotoUrl;

		expect(actualResult).to.eql(expectedResult);
	});

	it("should return subject photo url when ChannelSession::getSubjectPhotoUrl() is called", () => {
		const actualResult = context.entryObject.getSubjectPhotoUrl();
		const expectedResult = context.inputJSON.subjectPhotoUrl;

		expect(actualResult).to.eql(expectedResult);
	});

	it("should return a date time object when ChannelSession::getDateTime() is called", () => {
		const actualResultObject = context.entryObject.getDateTime();
		const expectedResultObject = new Date(context.inputJSON.time);

		expect(actualResultObject.getHours()).to.eql(expectedResultObject.getHours());
		expect(actualResultObject.getMinutes()).to.eql(expectedResultObject.getMinutes());
		expect(actualResultObject.getSeconds()).to.eql(expectedResultObject.getSeconds());
		expect(actualResultObject.getTime()).to.eql(expectedResultObject.getTime());
		expect(actualResultObject.getFullYear()).to.eql(expectedResultObject.getFullYear());
	});
});
