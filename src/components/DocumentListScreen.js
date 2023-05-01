import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { connect } from "react-redux";

import { getDocuments } from "../actions";

const sampleData = [
	{
		id: "doc1",
		title: "Marksheet - Mathematics",
		date: "01/01/2023",
		issuedBy: "ABC School",
	},
	{
		id: "doc2",
		title: "Marksheet - Physics",
		date: "04/01/2023",
		issuedBy: "XYZ School",
	},
	{
		id: "doc3",
		title: "Marksheet - Chemistry",
		date: "06/01/2023",
		issuedBy: "PQR College",
	},
];

class DocumentListScreen extends Component {
	componentDidMount() {
		this.props.getDocuments(1, 1);
		console.log(this.props.document_data);
	}
	renderItem = ({ item }) => {
		return (
			<View style={styles.itemContainer}>
				<Image
					source={require("../assets/icons/image-test-icon.jpeg")}
					style={styles.icon}
				/>
				<View style={styles.itemTextContainer}>
					<Text style={styles.itemTitle}>{item.document_name}</Text>
					<Text
						style={styles.itemSubtitle}
					>{`Issued by ${item.issued_at} on 2023`}</Text>
				</View>
			</View>
		);
	};

	render() {
		return (
			<View style={styles.container}>
				<FlatList
					data={this.props.document_data}
					keyExtractor={(item) => item.id}
					renderItem={this.renderItem}
					style={styles.list}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FFFFFF",
		alignItems: "center",
		justifyContent: "center",
	},
	list: {
		width: "100%",
		paddingHorizontal: 20,
	},
	itemContainer: {
		marginTop: 5,
		backgroundColor: "#F5F5F5",
		borderRadius: 10,
		padding: 20,
		marginBottom: 10,
		flexDirection: "row",
		alignItems: "center",
		elevation: 1,
		borderColor: "gray",
	},
	icon: {
		width: 40,
		height: 40,
		marginRight: 20,
	},
	itemTextContainer: {
		flex: 1,
	},
	itemTitle: {
		fontSize: 18,
		fontWeight: "bold",
		marginBottom: 5,
		// color: "#000000",
	},
	itemSubtitle: {
		fontSize: 14,
		// color: "#666666",
	},
});

const mapStateToProps = (state) => {
	return {
		document_data: state.profile.document_data,
		profile_data: state.profile.profile_data,
	};
};

export default connect(mapStateToProps, {
	getDocuments,
})(DocumentListScreen);
