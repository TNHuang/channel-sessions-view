"use strict";

import generateTopicIcon from "./topic-icon.js";
import generateSummary from "./summary.js";
import generateInstructorInfo from "./instructor-info.js";
import generateTimeSlot from "./time-slot.js";

const { sessionStyle } = require("../constants");

export default function generateChannelSession(channelSessionObject, windowWidth = 1366) {
	const topicIcon = generateTopicIcon(
		channelSessionObject.getSubjectPhotoUrl(),
		windowWidth
		);
	const summary = generateSummary(
			channelSessionObject.getTitle(),
			channelSessionObject.getDescription()
		);
	const instructorInfo = generateInstructorInfo(
			channelSessionObject.getInstructorName(),
			channelSessionObject.getInstructPhotoUrl(),
			windowWidth
		);
	const timeSlot = generateTimeSlot(
		channelSessionObject.getDateTime()
		);

	let children;

	if (windowWidth > 650) {
		children = [
			topicIcon,
			summary,
			instructorInfo,
			timeSlot
		];
	} else {
		children = [
			instructorInfo,
			timeSlot,
			summary
		];
	}

	return {
		nodeStyle: sessionStyle.container,
		nestedNodeStyle: windowWidth > 650 ? sessionStyle.nestedNode : { width: "100%"},
		className: sessionStyle.className,
		children
	};	
}