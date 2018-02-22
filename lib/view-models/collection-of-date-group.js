"use strict";

import generateGroupItemsByDate from "./group-items-by-date.js";
const { container, fullWidthContainer } = require("../constants").collectionOfDateGroupStyle;

const deltax = (100 - 75)/(700 - 650);

function generateGraidentWidth(width) {
	return `${100 - parseInt((width - 650) * deltax)}%`;
}

export default function generateCollectionOfDateGroup(collectionOfDateGroupModel, windowWidth = 1366) {
	const dateGroups = collectionOfDateGroupModel.getDateGroups()
		.map((dateGroupModel) => {
			return generateGroupItemsByDate(dateGroupModel, windowWidth);
		});
	
	let nodeStyle;

	if (windowWidth > 700) {
		nodeStyle = container;
	} else if (windowWidth > 650) {
		nodeStyle = {
				width: generateGraidentWidth(windowWidth),
				margin: "0 auto"
			};
	} else {
		nodeStyle = fullWidthContainer;
	}

	return {
		nodeStyle: nodeStyle,
		children: dateGroups
	};
}