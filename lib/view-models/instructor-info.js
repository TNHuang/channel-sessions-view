"use strict";

const { instructorStyle, displayNone } = require("../constants");

export default function generateInstructorInfo(instructorName, photoUrl, windowWidth = 1366) {
	return {
		nodeStyle: instructorStyle.container,
		nestedNodeStyle: instructorStyle.nestedNode,
		children: [
			{
				nodeStyle: windowWidth > 1000 ? instructorStyle.photo : displayNone,
				src: photoUrl
			},
			{	
				nodeStyle: instructorStyle.instructorName,
				data: instructorName
			}
		]
	};
}
