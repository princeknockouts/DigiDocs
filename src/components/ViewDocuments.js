import React, { Component } from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import { appBackgroundColor } from "../extras/ConstantValues";
import { UserCard, EducationInfo } from "./common";

class ViewDocuments extends Component {
	render() {
		const { scrollViewStyle, educationInfoView } = styles;

		return (
			<ScrollView style={scrollViewStyle}>
				<UserCard />
				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
						marginTop: 20,
					}}
				>
					<View
						style={{
							flex: 1,
							height: 1,
							backgroundColor: "gray",
							marginLeft: 5,
						}}
					/>
					<View>
						<Text
							style={{
								width: 160,
								textAlign: "center",
								letterSpacing: 3,
								fontWeight: "bold",
							}}
						>
							ORGANIZATIONS
						</Text>
					</View>
					<View
						style={{
							flex: 1,
							height: 1,
							backgroundColor: "gray",
							marginRight: 5,
						}}
					/>
				</View>
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
		backgroundColor: "white",
	},
	educationInfoView: {
		marginTop: 8,
	},
});

export default ViewDocuments;
