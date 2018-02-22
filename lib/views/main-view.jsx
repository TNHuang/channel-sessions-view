"use strict";

import React, { Component } from 'react';

import channelData from "../data/channel.json";

import CollectionOfDateGroupModel from "../models/collection-of-date-group-model.js";
import generateCollectionOfDateGroup from "../view-models/collection-of-date-group.js";
import TreeView from "./tree-view.jsx";
import "./main-view.css"; 

export default class MainView extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			windowWidth: 0, 
			windowHeight: 0,
			dateGroups: new CollectionOfDateGroupModel(channelData)
		};
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
	}

	componentDidMount() {
		this.updateWindowDimensions();
		window.addEventListener("resize", this.updateWindowDimensions);
	}

	componentWillUnmount() {
		window.removeEventLister("resize", this.updateWindowDimensions);
	}

	updateWindowDimensions() {
		this.setState({
			windowWidth: window.innerWidth,
			windowHeight: window.innerHeight
		});
	}

	render() {
		const viewModel = generateCollectionOfDateGroup(
			this.state.dateGroups,
			this.state.windowWidth,
			this.state.windowHeight
			);

		return (
				<div className={ "grey-back-ground covered-full-screen" }>
					<TreeView dataNode={ viewModel } />
				</div>
			);
	}
} 