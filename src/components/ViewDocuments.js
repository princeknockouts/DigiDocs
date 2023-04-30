import React, { Component } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { appBackgroundColor } from "../extras/ConstantValues";
import { UserCard, EducationInfo } from "./common";

class ViewDocuments extends Component {
	render() {
		const { scrollViewStyle, educationInfoView } = styles;

		return (
			<ScrollView style={scrollViewStyle}>
				<UserCard />
				<View style={educationInfoView}>
					<EducationInfo
						collegeName="Example University"
						yearOfPassing="2021"
						educationType="Bachelor of Science"
					/>
					<EducationInfo
						collegeName="Another Example College"
						yearOfPassing="2018"
						educationType="Master of Arts"
					/>
					<EducationInfo
						collegeName="A Third Example School"
						educationType="Doctor of Philosophy"
					/>
				</View>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	scrollViewStyle: {
		backgroundColor: appBackgroundColor,
	},
	educationInfoView: {
		marginTop: 20,
	},
});

export default ViewDocuments;
