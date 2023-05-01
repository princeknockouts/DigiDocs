import React, { Component } from "react";
import {
	ScrollView,
	Text,
	TextInput,
	TouchableOpacity,
	StyleSheet,
	Image,
} from "react-native";
import ModalDropdown from "react-native-modal-dropdown";

import { connect } from "react-redux";
import {
	purposeOfApplication,
	organizationNameValueChanged,
	typeOfDocumentValueChanged,
	setApplicationRequestAPICall,
} from "../actions";

class ViewApplications extends Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		documentType: "",
	// 		organization: "",
	// 		purpose: "",
	// 	};
	// }

	handleSubmit = () => {
		// Handle form submission here
		console.log("Form submitted!");
	};

	render() {
		const documentTypeOptions = ["Passport", "Driver's License", "ID Card"];
		const organizationOptions = [
			"School",
			"University",
			"Other Educational Institution",
		];

		return (
			<ScrollView style={styles.container}>
				<Image
					style={styles.imageStyle}
					source={require("../assets/icons/apply-for-document.png")}
				/>
				<Text style={styles.label}>Type of Document</Text>
				<ModalDropdown
					options={documentTypeOptions}
					defaultValue="Select Document Type"
					onSelect={(index, value) =>
						this.props.typeOfDocumentValueChanged(value)
					}
					style={styles.dropdown}
					textStyle={styles.dropdownText}
					dropdownStyle={styles.dropdownMenu}
				/>

				<Text style={styles.label}>Organization</Text>
				<ModalDropdown
					options={organizationOptions}
					defaultValue="Select Organization"
					onSelect={(index, value) =>
						this.props.organizationNameValueChanged(value)
					}
					style={styles.dropdown}
					textStyle={styles.dropdownText}
					dropdownStyle={styles.dropdownMenu}
				/>

				<Text style={styles.label}>Purpose</Text>
				<TextInput
					style={styles.input}
					placeholder="Enter Purpose"
					onChangeText={(text) =>
						this.props.purposeOfApplication(text)
					}
					value={this.props.purpose}
				/>

				<TouchableOpacity
					style={styles.button}
					onPress={() => {
						this.props.setApplicationRequestAPICall(
							1,
							this.props.type,
							this.props.organizationName,
							this.props.purpose
						);
					}}
				>
					<Text style={styles.buttonText}>Submit</Text>
				</TouchableOpacity>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		backgroundColor: "#fff",
	},
	imageStyle: {
		width: 200,
		height: 200,
		alignSelf: "center",
		marginBottom: 65,
		marginTop: 10,
	},
	label: {
		fontSize: 16,
		fontWeight: "bold",
		marginBottom: 5,
	},
	input: {
		borderWidth: 1,
		borderColor: "#ccc",
		borderRadius: 5,
		padding: 10,
		marginBottom: 20,
	},
	dropdown: {
		borderWidth: 1,
		borderColor: "#ccc",
		borderRadius: 5,
		padding: 10,
		marginBottom: 20,
	},
	dropdownText: {
		fontSize: 16,
	},
	dropdownMenu: {
		borderRadius: 5,
		borderColor: "#ccc",
		borderWidth: 1,
		padding: 5,
	},
	button: {
		backgroundColor: "black",
		padding: 10,
		borderRadius: 5,
		width: 80,
		alignSelf: "center",
	},
	buttonText: {
		color: "#fff",
		fontSize: 16,
		fontWeight: "bold",
		textAlign: "center",
	},
});

// export default ViewApplications;

const mapStateToProps = (state) => {
	return {
		purpose: state.application.purpose,
		type: state.application.type,
		organizationName: state.application.organizationName,
	};
};

export default connect(mapStateToProps, {
	purposeOfApplication,
	organizationNameValueChanged,
	typeOfDocumentValueChanged,
	setApplicationRequestAPICall,
})(ViewApplications);

// export default connect(mapStateToProps, {
// 	purposeOfApplication,
// 	loginPasswordValueChanged,
// })(Login);
