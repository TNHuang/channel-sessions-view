"use strict";

import formatGroupDate from "../plugins/format-group-date.js";

export default class GroupByDateModel {
	constructor(dateTimeObject, groupItems = []) {
		this.setGroupDate(dateTimeObject);
		this.groupItems = groupItems;
	}

	getGroupDateTitle() {
		return this.groupDateTitle;
	}

	getGroupItems() {
		return this.groupItems;
	}

	addGroupItem(newGroupItem) {
		this.groupItems.push(newGroupItem);
		return this;
	}

	setGroupDate(dateTimeObject) {
		this.groupDate = new Date(
				dateTimeObject.getFullYear(),
				dateTimeObject.getMonth(),
				dateTimeObject.getDate()
			);
		this.groupDateTitle = formatGroupDate(this.groupDate);
	}

	getGroupDate() {
		return this.groupDate;
	}
}