import React, { Component } from "react";
import { ScrollView, Text, StyleSheet, TouchableOpacity } from "react-native";

class Dashboard extends Component {
	render() {
		const { rootViewStyle } = styles;
		return (
			<ScrollView style={rootViewStyle}>
				<Text>Dashboard</Text>
				<TouchableOpacity
					onPress={() => {
						console.log("test");
					}}
				>
					<Text>Test</Text>
				</TouchableOpacity>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	rootViewStyle: {
		flex: 1,
		backgroundColor: "white",
	},
});

export default Dashboard;
