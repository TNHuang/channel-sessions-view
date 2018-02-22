"use strict";

import GroupByDateModel from "../models/group-by-date-model.js";

function initializeDateGroup(dateTime, dateKey, dateGroupMap, groupByDateModels) {
	dateGroupMap[dateKey] = new GroupByDateModel(dateTime, []);
	groupByDateModels.push(dateGroupMap[dateKey]);

	return dateGroupMap[dateKey];
}

function getDateKey(dateTime) {
	return `${dateTime.getFullYear()}-${dateTime.getMonth()}-${dateTime.getDate()}`;
}

export default function groupChannelByDate(channels) {
	const existingDateGroup = {};
	const groupByDateModels = [];

	channels.forEach((channel) => {
		const currentDateTime = channel.getDateTime();
		const currentDateKey = getDateKey(currentDateTime);
		const dateGroup = existingDateGroup[currentDateKey] || 
			initializeDateGroup(
				currentDateTime, 
				currentDateKey, 
				existingDateGroup,
				groupByDateModels
			);

		dateGroup.addGroupItem(channel);
	});

	return groupByDateModels;
} 