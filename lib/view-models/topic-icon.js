"use strict";

const { containerStyle, imageStyle } = require("../constants.js").topicIconSytle;
const { displayNone } = require("../constants.js");

export default function generateTopicIcon(topicIconUrl, windowWidth = 1366) {
	return {
		nodeStyle: windowWidth > 650 ? containerStyle : displayNone,
		children: [
			{
				nodeStyle: imageStyle,
				src: topicIconUrl
			}
		]
	};
}