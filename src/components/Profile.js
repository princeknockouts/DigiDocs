import React, { Component } from "react";
import {
	View,
	Text,
	StyleSheet,
	Image,
	TouchableOpacity,
	ScrollView,
} from "react-native";

import { getProfileDataAPICall } from "../actions";
import { connect } from "react-redux";

class Profile extends Component {
	componentDidMount() {
		this.props.getProfileDataAPICall(1);
	}
	render() {
		return (
			<ScrollView style={{ backgroundColor: "white" }}>
				<View style={styles.container}>
					<View style={styles.card}>
						<View style={styles.body}>
							<View style={styles.profileImageContainer}>
								<Image
									source={require("../assets/icons/john-doe.jpeg")}
									style={styles.profileImage}
								/>
							</View>
							{/* <Text style={styles.studentIdStyle}>
								Student ID
							</Text> */}
							<View style={styles.aadharNumberContainer}>
								<Text style={styles.aadharNumber}>
									1234 5678 9012
								</Text>
							</View>
							<View style={styles.line} />
							<Text style={styles.label}>Name:</Text>
							<Text style={styles.value}>John Doe</Text>
							<View style={styles.line} />
							<Text style={styles.label}>Gender:</Text>
							<Text style={styles.value}>Male</Text>
							<View style={styles.line} />
							<Text style={styles.label}>Date of Birth:</Text>
							<Text style={styles.value}>01-01-2000</Text>
							<View style={styles.line} />
							<Text style={styles.label}>Address:</Text>
							<Text style={styles.value}>
								123 Main Street, Anytown, USA
							</Text>
							<View style={styles.line} />
							<Text style={styles.label}>Mobile Number:</Text>
							<Text style={styles.value}>+1 234-567-8901</Text>

							{/* <TouchableOpacity style={styles.editButton}>
								<Text style={styles.editButtonText}>Edit</Text>
							</TouchableOpacity> */}
						</View>
					</View>
				</View>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		// flex: 1,
		alignItems: "center",
		justifyContent: "center",
		// backgroundColor: "#f2f2f2",
		backgroundColor: "white",
		height: "100%",
	},
	card: {
		// backgroundColor: "#fff",
		// borderRadius: 8,
		// shadowColor: "#000",
		// shadowOffset: {
		// 	width: 0,
		// 	height: 2,
		// },
		// shadowOpacity: 0.25,
		// shadowRadius: 3.84,
		elevation: 5,
		padding: 16,
		width: "100%",
	},
	header: {
		alignItems: "center",
		marginBottom: 16,
	},
	headerText: {
		fontSize: 24,
		fontWeight: "bold",
		color: "#000",
	},
	body: {
		alignItems: "center",
	},
	profileImageContainer: {
		borderWidth: 2,
		borderColor: "lightgray",
		borderRadius: 60,
		overflow: "hidden",
	},
	profileImage: {
		width: 120,
		height: 120,
	},
	label: {
		fontSize: 16,
		fontWeight: "bold",
		color: "#666",
		marginTop: 13,
		alignSelf: "flex-start",
	},
	value: {
		fontSize: 16,
		color: "#000",
		marginBottom: 7,
		alignSelf: "flex-start",
	},
	line: {
		backgroundColor: "lightgray",
		height: 1,
		width: "100%",
		marginTop: 8,
		marginBottom: 8,
	},
	aadharNumberContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		marginTop: 15,
		marginBottom: 15,
	},
	aadharNumber: {
		fontSize: 24,
		fontWeight: "bold",
		color: "#000",
		letterSpacing: 4,
		textAlign: "center",
	},
	editButton: {
		backgroundColor: "#000",
		padding: 8,
		borderRadius: 8,
		marginTop: 16,
		padding: 10,
	},
	editButtonText: {
		fontSize: 15,
		color: "#fff",
		// fontWeight: "bold",
	},
	studentIdStyle: {
		alignSelf: "center",
		fontSize: 16,
		fontWeight: "bold",
		color: "#666",
		marginTop: 13,
	},
});

const mapStateToProps = (state) => {
	return {
		// loginUsername: state.login.loginUsername,
		// loginPassword: state.login.loginPassword,
	};
};

export default connect(mapStateToProps, {
	getProfileDataAPICall,
})(Profile);
