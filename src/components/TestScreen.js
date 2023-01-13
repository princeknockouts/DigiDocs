import React, { Component } from "react";
import { ScrollView, View, Text, TouchableOpacity } from "react-native";
import { DocumentTile } from "./common";

class TestScreen extends Component {
	render() {
		return (
			<ScrollView>
				<Text>TestScreen</Text>
				<DocumentTile />
			</ScrollView>
		);
	}
}

export default TestScreen;
