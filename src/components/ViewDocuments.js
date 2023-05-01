import React, { Component } from "react";
import {
	ScrollView,
	StyleSheet,
	View,
	Text,
	TouchableOpacity,
	FlatList,
} from "react-native";
import { appBackgroundColor } from "../extras/ConstantValues";
import { UserCard, EducationInfo } from "./common";
import {
	getProfileDataAPICall,
	setProfileData,
	getStudentOrganizationMapping,
} from "../actions";
import { connect } from "react-redux";

const sampleData = [
	{
		collegeName: "Harvard University",
		from: "2001",
		to: "2004",
		type: "Bachelor of Science in Computer Science",
		no: "10",
	},
];

class ViewDocuments extends Component {
	componentDidMount() {
		this.props.getProfileDataAPICall(1);
		this.props.getStudentOrganizationMapping(1);
	}

	renderItem = ({ item }) => {
		return (
			<EducationInfo
				collegeName={item.collegeName}
				fromYear={item.from}
				toYear={item.to}
				educationType={item.type}
				numDocuments={item.no}
				onPress={() => {
					this.props.navigation.navigate("DocumentList");
				}}
			/>
		);
	};
	render() {
		const { scrollViewStyle, educationInfoView } = styles;

		return (
			<ScrollView style={scrollViewStyle}>
				<TouchableOpacity
					onPress={() => console.log(this.props.profile_data)}
				>
					<UserCard
						name={
							this.props.profile_data.first_name +
							" " +
							this.props.profile_data.last_name
						}
						id={this.props.profile_data.ecard}
						organization="KJSIT"
						phoneNumber={this.props.profile_data.contact}
					/>
				</TouchableOpacity>
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
					{/* <EducationInfo
						collegeName="Harvard University"
						fromYear="2014"
						toYear="2018"
						educationType="Bachelor of Science in Computer Science"
						numDocuments={15}
						onPress={() => {
							this.props.navigation.navigate("DocumentList");
						}}
					/> */}
					<FlatList
						renderItem={this.renderItem}
						data={sampleData}
						keyExtractor={(item) => item.id}
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

const mapStateToProps = (state) => {
	return {
		// loginUsername: state.login.loginUsername,
		// loginPassword: state.login.loginPassword,
		profile_data: state.profile.profile_data,
	};
};

export default connect(mapStateToProps, {
	getProfileDataAPICall,
	setProfileData,
	getStudentOrganizationMapping,
})(ViewDocuments);
