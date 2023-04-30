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
						collegeName="Harvard University"
						fromYear="2014"
						toYear="2018"
						educationType="Bachelor of Science in Computer Science"
						numDocuments={15}
						onPress={() => {
							this.props.navigation.navigate("DocumentList");
						}}
					/>
					<EducationInfo
						collegeName="Stanford University"
						fromYear="2019"
						educationType="Master of Science in Computer Science"
						numDocuments={8}
					/>
					<EducationInfo
						collegeName="Massachusetts Institute of Technology"
						fromYear="2023"
						educationType="Doctor of Philosophy in Computer Science"
						numDocuments={0}
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
