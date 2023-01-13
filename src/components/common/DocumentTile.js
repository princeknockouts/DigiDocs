import React, { Component } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

class DocumentTile extends Component {
	render() {
		const { mainViewStyle } = styles;
		return (
			<View>
				<Text>Document Name</Text>
				<Text>Org Name</Text>
				<Text>DOI</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	mainViewStyle: {
		//
	},
});

export { DocumentTile };
