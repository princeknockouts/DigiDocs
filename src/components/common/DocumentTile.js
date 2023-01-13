import React, { Component } from "react";
import {
	View,
	TouchableOpacity,
	Text,
	StyleSheet,
	ImageBackground,
	Image,
} from "react-native";

class DocumentTile extends Component {
	render() {
		const { mainViewStyle, imageStyle, innerViewStyle } = styles;
		const { onPress, documentName, documentIssuer, dateOfIssue } =
			this.props;
		return (
			<TouchableOpacity onPress={onPress}>
				<ImageBackground
					source={require("../../assets/icons/file.png")}
					style={imageStyle}
					tintColor="gray"
				>
					<View style={innerViewStyle}>
						<Text style={{ width: 100, flexWrap: "wrap" }}>
							{documentName}
						</Text>

						<Text>{documentIssuer}</Text>
						<Image
							source={require("../../assets/icons/image-test-icon.jpeg")}
							style={{
								height: 100,
								width: 80,
								alignSelf: "center",
								marginBottom: 5,
								marginTop: 5,
							}}
						/>
						<Text>Date of Issue : {dateOfIssue}</Text>
					</View>
				</ImageBackground>
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	mainViewStyle: {
		//
	},
	imageStyle: {
		height: 200,
		width: 160,
		// backgroundColor: "blue",
		tintColor: "lightgray",
		marginTop: 20,
	},
	innerViewStyle: {
		padding: 12,
	},
});

export { DocumentTile };
