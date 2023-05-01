import React, { Component } from "react";
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	TouchableOpacity,
	ScrollView,
	Image,
} from "react-native";
import {
	loginButtonBorderColor,
	loginButtonTextColor,
	loginHeadingTextColor,
	loginTextInputBorderColor,
} from "../extras/ConstantValues";
import { connect } from "react-redux";
import { forgotPasswordUsernameValueChanged } from "../actions";

class ForgotPassword extends Component {
	render() {
		const {
			imageStyle,
			rootViewStyle,
			textInputStyle,
			buttonStyle,
			mainViewStyle,
			buttonTextStyle,
			headingStyle,
			backButtonStyle,
		} = styles;

		return (
			<ScrollView style={rootViewStyle}>
				<View style={mainViewStyle}>
					<Image
						style={imageStyle}
						source={require("../assets/icons/forgot-password.jpg")}
					/>
					<Text style={headingStyle}> Forgot Password </Text>
					<TextInput
						placeholder="Username"
						style={textInputStyle}
						onChangeText={(value) => {
							this.props.forgotPasswordUsernameValueChanged(
								value
							);
						}}
						value={this.props.forgotPasswordUsername}
					/>
					<TouchableOpacity style={buttonStyle}>
						<Text style={buttonTextStyle}>Send OTP</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={backButtonStyle}
						onPress={() => {
							this.props.navigation.navigate("Login");
						}}
					>
						<Text style={buttonTextStyle}>Back to Login</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	rootViewStyle: {
		flexGrow: 1,
		backgroundColor: "white",
	},
	imageStyle: {
		width: 350,
		height: 350,
		alignSelf: "center",
		marginBottom: 20,
		marginTop: 50,
	},
	textInputStyle: {
		paddingLeft: 10,
		width: "90%",
		height: 42,
		borderColor: loginTextInputBorderColor,
		borderWidth: 1,
		marginTop: 30,
		borderRadius: 10,
	},
	buttonStyle: {
		borderColor: loginButtonBorderColor,
		borderWidth: 1,
		borderRadius: 10,
		alignItems: "center",
		justifyContent: "center",
		marginTop: 30,
		width: 100,
		height: 45,
	},
	mainViewStyle: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "white",
	},
	buttonTextStyle: {
		color: loginButtonTextColor,
	},
	headingStyle: {
		color: loginHeadingTextColor,
		marginTop: 30,
		fontSize: 23,
	},
	backButtonStyle: {
		marginTop: 10,
	},
});

const mapStateToProps = (state) => {
	return {
		forgotPasswordUsername: state.login.forgotPasswordUsername,
	};
};

export default connect(mapStateToProps, {
	forgotPasswordUsernameValueChanged,
})(ForgotPassword);
