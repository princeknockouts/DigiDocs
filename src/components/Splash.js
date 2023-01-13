import React, { Component } from "react";
import { Image, View, Text, StyleSheet } from "react-native";

class Splash extends Component {
	componentDidMount() {
		setTimeout(() => {
			this.props.navigation.reset({
				index: 0,
				routes: [{ name: "Login" }],
			});
		}, 3000);
	}

	render() {
		const { imageStyle, textStyle, rootViewStyle } = styles;
		return (
			<View style={rootViewStyle}>
				<Image
					style={imageStyle}
					source={require("../assets/icons/splashAnimation.gif")}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	imageStyle: {
		height: 250,
		width: 250,
	},
	rootViewStyle: {
		backgroundColor: "white",
		flex: 1,
		alignContent: "center",
		alignItems: "center",
		justifyContent: "center",
	},
	textStyle: {
	},
});

export default Splash;
