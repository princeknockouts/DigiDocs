import React, { Component } from "react";
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	Image,
	ScrollView,
	StyleSheet,
} from "react-native";
import { connect } from 'react-redux';
import {
	loginUsernameValueChanged,
	loginPasswordValueChanged,
} from '../actions';
import {
	loginBackgroundColor,
	loginButtonBorderColor,
	loginButtonTextColor,
	loginTextInputBorderColor,
	loginHeadingTextColor,
} from '../extras/ConstantValues';

class Login extends Component {
	render() {
		const {
			imageStyle,
			rootStyle,
			loginButtonStyle,
			textInputStyle,
			forgotButtonStyle,
			loginTextStyle,
		} = styles;
		return (
			<ScrollView style={rootStyle}>
				<Image
					style={imageStyle}
					source={require("../assets/icons/login1.gif")}
				/>
				<Text style={loginTextStyle}>LOGIN</Text>
				<TextInput 
					style={textInputStyle} 
					placeholder="E-Mail" 
					onChangeText={(value) => {
						loginUsernameValueChanged(value);
					}}
					value={this.props.loginUsername}
				/>
				<TextInput
					style={textInputStyle}
					placeholder="Password"
					onChangeText={(value) => {
						loginPasswordValueChanged(value);
					}}
					value={this.props.loginPassword}
				/>
				<TouchableOpacity
					style={loginButtonStyle}
					onPress={() => {
						this.props.navigation.navigate("Home");
					}}
				>
					<Text>Login</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={forgotButtonStyle}
					onPress={()=> {
						this.props.navigation.navigate('ForgotPassword')
					}}
				>
					<Text>Forgot Password?</Text>
				</TouchableOpacity>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	imageStyle: {
		width: 350,
		height: 350,
		alignSelf: "center",
		marginBottom: 20,
	},
	rootStyle: {
		backgroundColor: loginBackgroundColor,
		alignContent: "center",
	},
	loginButtonStyle: {
		height: 40,
		width: 100,
		borderWidth: 1,
		alignContent: "center",
		alignItems: "center",
		justifyContent: "center",
		marginTop: 30,
		alignSelf: "center",
		borderColor: loginButtonBorderColor,
		borderRadius: 10,
	},
	textInputStyle: {
		width: "90%",
		height: 45,
		borderWidth: 1,
		borderColor: loginTextInputBorderColor,
		alignSelf: "center",
		marginTop: 10,
		borderRadius: 10,
		paddingLeft: 10,
	},
	forgotButtonStyle: {
		marginTop: 15,
		alignSelf: "center",
	},
	loginTextStyle: {
		letterSpacing: 3,
		alignSelf: "center",
		fontSize: 25,
		marginBottom: 10,
		color: loginHeadingTextColor,
	},
	loginButtonTextStyle: {
		color: loginButtonTextColor,
	}
});

const mapStateToProps = state => {
	return {
		loginUsername: state.login.loginUsername,
		loginPassword: state.login.loginPassword,
	}
}

export default connect(mapStateToProps, {
	loginUsernameValueChanged,
	loginPasswordValueChanged,
})(Login);
