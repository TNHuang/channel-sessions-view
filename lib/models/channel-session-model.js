"use strict";

export default class ChannelSession {
	constructor(jsonInput) {
		this.data = jsonInput;
		this.setDateTime(jsonInput.time);
	}

	getTitle() {
		return this.data.title;
	}

	getDescription() {
		return this.data.description;
	}

	getInstructorName() {
		return this.data.instructorName;
	}

	getInstructPhotoUrl() {
		return this.data.instructorPhotoUrl;
	}

	getSubjectPhotoUrl() {
		return this.data.subjectPhotoUrl;
	}

	setDateTime(dateTimeString) {
		this.dateTime = new Date(dateTimeString);
	}

	getDateTime() {
		return this.dateTime;
	}
}
