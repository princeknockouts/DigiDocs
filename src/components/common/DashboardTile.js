import React, { Component } from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

class DashboardTile extends Component {
	render() {

		const {
			tileStyle,
			tileHeadingTextStyle,
		} = styles;

		const {
			tileHeading,
			tileColor,
			tileOnPress,
		} = this.props;

		return (
			<TouchableOpacity
				style={[tileStyle, {backgroundColor: tileColor}]}
				onPress={tileOnPress}
			>
				<Text style={tileHeadingTextStyle}>{tileHeading}</Text>
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	tileStyle: {
		height: 150,
		width: 150,
		borderRadius: 10,
		padding: 15,
	},
	tileHeadingTextStyle: {
		color: 'white',
		fontSize: 16,
		fontWeight: 'bold',
		letterSpacing: 2,
	}
});

export { DashboardTile };
