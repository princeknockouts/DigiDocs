import React, { Component } from "react";
import { ScrollView, Text, StyleSheet, View } from "react-native";
import { DashboardTile } from "./common";

class Dashboard extends Component {
	render() {
		const { rootViewStyle, horizontalTileStyle } = styles;

		return (
			<ScrollView style={rootViewStyle}>
				<View style={horizontalTileStyle}>
					<DashboardTile
						tileHeading="Profile"
						tileColor="blue"
						tileOnPress={() => {
							this.props.navigation.navigate("Profile");
						}}
					/>
					<DashboardTile
						tileHeading="View Documents"
						tileColor="red"
						tileOnPress={() => {
							this.props.navigation.navigate("ViewDocuments");
						}}
					/>
				</View>
				<View style={horizontalTileStyle}>
					<DashboardTile
						tileHeading="View Applications"
						tileColor="pink"
						tileOnPress={() => {
							this.props.navigation.navigate("ViewApplications");
						}}
					/>
					<DashboardTile
						tileHeading="Apply for Document"
						tileColor="green"
						tileOnPress={() => {
							this.props.navigation.navigate("ApplyForDocuments");
						}}
					/>
				</View>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	rootViewStyle: {
		flexGrow: 1,
	},
	horizontalTileStyle: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},
});

export default Dashboard;
