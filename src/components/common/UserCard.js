import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

class UserCard extends Component {
	render() {
		// Hardcoded user details
		const user = {
			name: "John Doe",
			id: "12345",
			organization: "ABC Corporation",
			phoneNumber: "555-123-4567",
			photoUrl: "require('../../assets/icons/john-doe.jpeg')",
		};

		const { name, id, organization, phoneNumber } = this.props;

		return (
			<View style={styles.container}>
				<Image
					style={styles.photo}
					source={require("../../assets/icons/john-doe.jpeg")}
				/>
				<View style={styles.details}>
					<Text style={styles.name}>{name}</Text>
					<Text style={styles.id}>ID: {id}</Text>
					<Text style={styles.organization}>{organization}</Text>
					<Text style={styles.phoneNumber}>Phone: {phoneNumber}</Text>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#fff",
		borderRadius: 10,
		padding: 16,
		marginHorizontal: 16,
		marginVertical: 8,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	},
	photo: {
		width: 80,
		height: 80,
		borderRadius: 40,
		marginRight: 16,
	},
	details: {
		flex: 1,
	},
	name: {
		fontSize: 20,
		fontWeight: "bold",
		marginBottom: 4,
	},
	id: {
		fontSize: 16,
		marginBottom: 4,
	},
	organization: {
		fontSize: 16,
		marginBottom: 4,
	},
	phoneNumber: {
		fontSize: 16,
	},
});

export { UserCard };
