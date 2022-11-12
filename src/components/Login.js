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
				<TextInput style={textInputStyle} placeholder="E-Mail" />
				<TextInput style={textInputStyle} placeholder="Password" />
				<TouchableOpacity
					style={loginButtonStyle}
					onPress={() => {
						this.props.navigation.navigate("Home");
					}}
				>
					<Text>Login</Text>
				</TouchableOpacity>
				<TouchableOpacity style={forgotButtonStyle}>
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
		margin: 20,
	},
	rootStyle: {
		backgroundColor: "white",
		alignContent: "center",
	},
	loginButtonStyle: {
		height: 35,
		width: 63,
		borderWidth: 1,
		alignContent: "center",
		alignItems: "center",
		justifyContent: "center",
		margin: 15,
		alignSelf: "center",
		borderColor: "gray",
		borderRadius: 6,
	},
	textInputStyle: {
		width: "93%",
		height: 42,
		borderWidth: 1,
		borderColor: "lightgray",
		alignSelf: "center",
		marginTop: 10,
		borderRadius: 6,
	},
	forgotButtonStyle: {
		alignSelf: "center",
	},
	loginTextStyle: {
		letterSpacing: 3,
		alignSelf: "center",
		fontSize: 25,
		marginBottom: 10,
	},
});

export default Login;
