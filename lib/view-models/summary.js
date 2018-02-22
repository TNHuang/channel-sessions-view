"use strict";

const { summaryStyle } = require("../constants.js"); 

export default function generateSummary(title, summary) {
	return {
		nodeStyle: summaryStyle.container,
		children: [
			{
				nodeStyle: summaryStyle.title,
				data: title
			},
			{
				nodeStyle: summaryStyle.summary,
				data: summary
			}
		]
	};
}