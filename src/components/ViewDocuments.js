import React, { Component } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { appBackgroundColor } from "../extras/ConstantValues";
import { UserCard } from "./common/UserCard";

class ViewDocuments extends Component {
	render() {
		const { scrollViewStyle } = styles;

		return (
			<ScrollView style={scrollViewStyle}>
				<UserCard />
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	scrollViewStyle: {
		backgroundColor: appBackgroundColor,
	},
});

export default ViewDocuments;
