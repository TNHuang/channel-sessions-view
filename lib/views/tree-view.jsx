"use strict";

import React, { Component } from "react";
import "./tree-view.css";

function hasAtLeastOneElement(arr) {
	return !!(Array.isArray(arr) && arr.length);
}

export default class TreeView extends Component {
	constructor(props) {
		super(props);

		this.state = { dataNode: props.dataNode };
		this.generateTreeView = this.generateTreeView.bind(this);
		this.generateChildrenRender = this.generateChildrenRender.bind(this);
		this.generateDataNodeWithChildren = this.generateDataNodeWithChildren.bind(this);
	}

	componentWillReceiveProps(newProps) {
		this.setState({ dataNode: newProps.dataNode });
	}

	generateChildrenRender(dataNode, childrenNodes) {
		return childrenNodes.map((childNode, idx) => {
			if (!childNode.nodeStyle) { childNode.nodeStyle = {}; }
			if (dataNode.nestedNodeStyle) {
				childNode.nodeStyle = 
					Object.assign(
							{},
							childNode.nodeStyle,
							dataNode.nestedNodeStyle
						);
			}
			childNode.key = `${dataNode.key}.${idx}`;

			return this.generateTreeView(childNode);
		});
	}

	generateDataNodeWithChildren(dataNode) {
		const childrenRender = this.generateChildrenRender(dataNode, dataNode.children);
				
		return (
				<div className= { dataNode.className || "" } style={ dataNode.nodeStyle } key={ dataNode.key } >
					{ childrenRender }
				</div>
			);
	}

	generateTreeView(dataNode) {
		if (!dataNode.key) { dataNode.key = "root"; }

		if (hasAtLeastOneElement(dataNode.children)) {
			return this.generateDataNodeWithChildren(dataNode);
		} else if (dataNode.src) {
			return (<img className= { dataNode.className || "" } style={ dataNode.nodeStyle } src={ dataNode.src } key={ dataNode.key } />);
		} else if (dataNode.data) {
			return (
				<div 
					style={ dataNode.nodeStyle || {} } 
					key={ dataNode.key }
					className= { dataNode.className || "" }>
					{ dataNode.data }
				</div>
			);
		}
	}

	render() {
		return this.generateTreeView(this.state.dataNode);
	}
}