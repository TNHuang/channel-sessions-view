"use strict";

import ChannelSessionModel from "./channel-session-model.js";
import groupChannelByDate from "../plugins/group-channel-by-date.js";

export default class CollectionOfDateGroup {
	constructor(sessionsJSON = []) {
		this.parseSessions(sessionsJSON);
	}

	getDateGroups() {
		return this.dateGroups;
	}

	parseSessions(sessionJSON) {
		this.sessionModels = sessionJSON.map((session) => {
			return new ChannelSessionModel(session);
		}).sort((currentSession, nextSession) => {
			return currentSession.getDateTime().valueOf() - 
				nextSession.getDateTime().valueOf();
		});

		this.dateGroups = groupChannelByDate(this.sessionModels);
	}
}