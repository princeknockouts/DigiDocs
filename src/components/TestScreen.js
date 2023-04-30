import React, { Component } from "react";
import { ScrollView, View, Text, TouchableOpacity } from "react-native";
import { DocumentTile } from "./common";

class TestScreen extends Component {
	render() {
		return (
			<ScrollView>
				<View
					style={{
						flexDirection: "row",
						flexWrap: "wrap",
						justifyContent: "space-evenly",
					}}
				>
					<DocumentTile />
					<DocumentTile />
					<DocumentTile />
					<DocumentTile />
				</View>
			</ScrollView>
		);
	}
}

export default TestScreen;
