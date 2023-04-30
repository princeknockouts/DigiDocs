import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class EducationInfo extends Component {
	render() {
		const { collegeName, yearOfPassing, educationType } = this.props;
		const currentlyStudying = !yearOfPassing;

		return (
			<View style={styles.container}>
				<View style={styles.textContainer}>
					<Text style={styles.collegeName}>{collegeName}</Text>
					<Text style={styles.educationType}>{educationType}</Text>
				</View>
				{!currentlyStudying && (
					<Text
						style={styles.yearOfPassing}
					>{`Graduated in ${yearOfPassing}`}</Text>
				)}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingVertical: 10,
		paddingHorizontal: 15,
		borderBottomWidth: 1,
		borderBottomColor: "#e2e2e2",
	},
	textContainer: {
		flexDirection: "column",
		alignItems: "flex-start",
	},
	collegeName: {
		fontSize: 16,
		fontWeight: "bold",
		marginBottom: 5,
	},
	educationType: {
		fontSize: 14,
		color: "#8a8a8a",
	},
	yearOfPassing: {
		fontSize: 14,
		color: "#8a8a8a",
		fontStyle: "italic",
	},
});

export { EducationInfo };
