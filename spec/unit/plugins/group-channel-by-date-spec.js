"use strict";

import { expect } from "chai";
import groupChannelByDate from "../../../lib/plugins/group-channel-by-date.js";
import ChannelSessionModel from "../../../lib/models/channel-session-model.js";

describe("[plugins] Group channel by date", () => {
	let context;

	beforeEach(() => {
		context = {};
		context.entryPoint = groupChannelByDate;

		context.inputSessionModels = [
			{
				title: "group 1 session ord 1",
				time: "2018-10-01 16:00:00"
			},
			{
				title: "group 1 session ord 2",
				time: "2018-10-01 18:00:00"
			},
			{
				title: "group 2 session ord 1",
				time: "2018-12-14 9:00:00"
			},
			{
				title: "group 2 session ord 2",
				time: "2018-12-14 9:23:00"
			},
			{
				title: "group 3 session ord 1",
				time: "2019-01-07 13:00:00"
			}
		].map((sessionJSON) => {
			return new ChannelSessionModel(sessionJSON);
		});
	});

	it("should return a list of group-by-date-model when given an input of channel-session-model", () => {
		const actualResult = context.entryPoint(context.inputSessionModels);
		const firstGroup = actualResult[0];
		const secondGroup = actualResult[1];
		const thirdGroup = actualResult[2];

		expect(actualResult.length).to.eq(3);
		expect(firstGroup.getGroupDate().getMonth()).to.eq(9);
		expect(firstGroup.getGroupDate().getDate()).to.eq(1);
		expect(firstGroup.getGroupItems().length).to.eq(2);

		expect(secondGroup.getGroupDate().getMonth()).to.eq(11);
		expect(secondGroup.getGroupDate().getDate()).to.eq(14);
		expect(secondGroup.getGroupItems().length).to.eq(2);

		expect(thirdGroup.getGroupDate().getMonth()).to.eq(0);
		expect(thirdGroup.getGroupDate().getDate()).to.eq(7);
		expect(thirdGroup.getGroupItems().length).to.eq(1);
	});
});
