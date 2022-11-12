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

class Login extends Component {
	render() {
		const { imageStyle, rootStyle, loginButtonStyle, textInputStyle } =
			styles;
		return (
			<ScrollView style={rootStyle}>
				<Image
					style={imageStyle}
					source={require("../assets/icons/login.gif")}
				/>
				<TextInput style={textInputStyle} placeholder="E-Mail" />
				<TextInput style={textInputStyle} placeholder="Password" />
				<TouchableOpacity style={loginButtonStyle}>
					<Text>Login</Text>
				</TouchableOpacity>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	imageStyle: {
		width: 150,
		height: 150,
		alignSelf: "center",
		margin: 20,
	},
	rootStyle: {
		backgroundColor: "white",
		alignContent: "center",
	},
	loginButtonStyle: {
		height: 20,
		width: 40,
		borderWidth: 1,
	},
	textInputStyle: {
		width: "90%",
		height: 39,
		borderWidth: 1,
		borderColor: "lightgray",
		alignSelf: "center",
		marginTop: 10,
	},
});

export default Login;
