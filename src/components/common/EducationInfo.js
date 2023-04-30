import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

class EducationInfo extends Component {
	render() {
		const {
			collegeName,
			fromYear,
			toYear,
			educationType,
			numDocuments,
			onPress,
		} = this.props;
		const currentlyStudying = !toYear;

		return (
			<TouchableOpacity onPress={onPress} style={styles.container}>
				<View style={styles.textContainer}>
					<Text style={styles.collegeName}>{collegeName}</Text>
					<Text style={styles.educationType}>{educationType}</Text>
					<Text style={styles.graduatedText}>
						{currentlyStudying
							? "Currently studying"
							: `Graduated from ${collegeName} in ${toYear}`}
					</Text>
				</View>
				<View style={styles.extraInfoContainer}>
					<Text
						style={styles.numDocuments}
					>{`${numDocuments} documents`}</Text>
					{!currentlyStudying && (
						<Text
							style={styles.graduatedDate}
						>{`${fromYear} - ${toYear}`}</Text>
					)}
				</View>
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "column",
		backgroundColor: "#fff",
		paddingHorizontal: 15,
		paddingVertical: 10,
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
		marginBottom: 5,
	},
	graduatedText: {
		fontSize: 14,
		color: "#8a8a8a",
		fontStyle: "italic",
	},
	extraInfoContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	numDocuments: {
		fontSize: 14,
		color: "#8a8a8a",
		marginRight: 10,
		marginTop: 5,
	},
	graduatedDate: {
		fontSize: 14,
		color: "#8a8a8a",
		fontStyle: "italic",
	},
});

export { EducationInfo };
