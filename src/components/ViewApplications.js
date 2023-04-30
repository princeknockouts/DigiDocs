import React, { Component } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { appBackgroundColor } from "../extras/ConstantValues";
import { UserCard } from "./common/UserCard";

class ViewApplications extends Component {
	render() {
		const { scrollViewStyle } = styles;

		return <ScrollView style={scrollViewStyle}>{/*  */}</ScrollView>;
	}
}

const styles = StyleSheet.create({
	scrollViewStyle: {
		backgroundColor: appBackgroundColor,
	},
});

export default ViewApplications;
