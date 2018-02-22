"use strict";

import generateChannelSession from "./channel-session.js";
const { groupItemsByDateStyle } = require("../constants");

export default function generateGroupItemsByDate(groupByDateModelObj, windowWidth = 1366) {
	const sessionModels = groupByDateModelObj.getGroupItems();

	if (!sessionModels.length) { return {}; }

	const sessionViewModels = sessionModels.map((sessionObj) => {
			return generateChannelSession(sessionObj, windowWidth);
		});

	return {
		nodeStyle: groupItemsByDateStyle.container,
		nestedNodeStyle: groupItemsByDateStyle.nestedNode,
		children: [
			{
				nodeStyle: groupItemsByDateStyle.title,
				data: groupByDateModelObj.getGroupDateTitle()
			},
			{
				nodeStyle: groupItemsByDateStyle.sessions,
				nestedNodeStyle: groupItemsByDateStyle.nestedSession,
				children: sessionViewModels
			}
		]
	};
}