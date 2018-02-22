"use strict";

import Channel from "../models/channel-session-model.js";

export default function convertDataToChannelModel(datas) {
	return datas.map((data) => {
		return new Channel(data);
	});
}