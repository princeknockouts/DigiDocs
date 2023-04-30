// import React, { Component } from "react";
// import { ScrollView, StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
// import { appBackgroundColor } from "../extras/ConstantValues";

// class Profile extends Component {
//     render() {

//         const {
//             scrollViewStyle,
//             profileImageViewStyle,
//             profileImageStyle,
//             editButtonStyle,
//             iconImageStyle,
//             detailsViewStyle,
//             infoViewStyle,
//             textStyle,
//             viewDetailStyle,
//             detailTextStyle,
//         } = styles;

//         return (
//             <ScrollView style={scrollViewStyle}>
//                 <View style={profileImageViewStyle}>
//                     <Image style={profileImageStyle} resizeMode="contain" />
//                 </View>
//                 <TouchableOpacity
//                     style={editButtonStyle}
//                     onPress={()=>{
//                         this.props.navigation.navigate('EditProfile')
//                     }}
//                 >
//                     <Image style={iconImageStyle} source={require("../assets/icons/edit.png")} resizeMode='contain' />
//                 </TouchableOpacity>
//                 <View style={detailsViewStyle}>
//                 <View style={infoViewStyle}>
//                         <Text style={textStyle}>Student ID :</Text>
//                         <View style={viewDetailStyle}>
//                             <Text style={detailTextStyle}>123456789</Text>
//                         </View>
//                     </View>
//                     <View style={infoViewStyle}>
//                         <Text style={textStyle}>Name :</Text>
//                         <View style={viewDetailStyle}>
//                             <Text style={detailTextStyle}>Kashyap Kotak</Text>
//                         </View>
//                     </View>
//                     <View style={infoViewStyle}>
//                         <Text style={textStyle}>Gender :</Text>
//                         <View style={viewDetailStyle}>
//                             <Text style={detailTextStyle}>Male</Text>
//                         </View>
//                     </View>
//                     <View style={infoViewStyle}>
//                         <Text style={textStyle}>Contact :</Text>
//                         <View style={viewDetailStyle}>
//                             <Text style={detailTextStyle}></Text>
//                         </View>
//                     </View>
//                     <View style={infoViewStyle}>
//                         <Text style={textStyle}>Email ID :</Text>
//                         <View style={viewDetailStyle}>
//                             <Text style={detailTextStyle}></Text>
//                         </View>
//                     </View>
//                 </View>
//             </ScrollView>
//         );
//     }
// }

// const styles = StyleSheet.create({
//     scrollViewStyle: {
//         backgroundColor: appBackgroundColor,
//     },
//     profileImageViewStyle: {
//         height: 180,
//         width: 180,
//         borderRadius: 90,
//         borderColor: 'black',
//         borderWidth: 1,
//         alignSelf: "center",
//         marginTop: 30,
//     },
//     profileImageStyle: {
//         height: 180,
//         width: 180,
//         borderRadius: 90,
//     },
//     editButtonStyle: {
//         width: 30,
//         height: 30,
//         alignItems: 'center',
//         justifyContent: 'center',
//         alignSelf: "flex-end",
//         marginRight: 20,
//     },
//     iconImageStyle: {
//         height: 30,
//     },
//     detailsViewStyle:{
//         marginTop: 30,
//     },
//     infoViewStyle:{
//         flexDirection: 'row',
//         alignSelf: 'center',
//         width: "90%",
//         justifyContent: 'space-around',
//         marginTop: 20,
//     },
//     textStyle:{
//         alignSelf: 'center',
//         fontSize: 18,
//         flexWrap: "wrap",
//         width: "28%"
//     },
//     viewDetailStyle:{
//         borderBottomWidth: 1,
//         borderRightWidth: 1,
//         borderColor: 'black',
//         borderRadius: 10,
//         width: '75%',
//         paddingLeft: 20,
//         height: 40,
//         justifyContent: 'center',
//     },
//     detailTextStyle:{
//         color: 'black',
//     },
// })

// export default Profile;

import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

class Profile extends Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.card}>
					<View style={styles.body}>
						<View style={styles.profileImageContainer}>
							<Image
								source={require("../assets/icons/john-doe.jpeg")}
								style={styles.profileImage}
							/>
						</View>
						<Text style={styles.studentIdStyle}>Student ID</Text>
						<View style={styles.aadharNumberContainer}>
							<Text style={styles.aadharNumber}>
								1234 5678 9012
							</Text>
						</View>
						<View style={styles.line} />
						<Text style={styles.label}>Name:</Text>
						<Text style={styles.value}>John Doe</Text>
						<View style={styles.line} />
						<Text style={styles.label}>Gender:</Text>
						<Text style={styles.value}>Male</Text>
						<View style={styles.line} />
						<Text style={styles.label}>Date of Birth:</Text>
						<Text style={styles.value}>01-01-2000</Text>
						<View style={styles.line} />
						<Text style={styles.label}>Address:</Text>
						<Text style={styles.value}>
							123 Main Street, Anytown, USA
						</Text>
						<View style={styles.line} />
						<Text style={styles.label}>Mobile Number:</Text>
						<Text style={styles.value}>+1 234-567-8901</Text>

						<TouchableOpacity style={styles.editButton}>
							<Text style={styles.editButtonText}>Edit</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		// flex: 1,
		alignItems: "center",
		justifyContent: "center",
		// backgroundColor: "#f2f2f2",
		backgroundColor: "white",
		height: "100%",
	},
	card: {
		// backgroundColor: "#fff",
		// borderRadius: 8,
		// shadowColor: "#000",
		// shadowOffset: {
		// 	width: 0,
		// 	height: 2,
		// },
		// shadowOpacity: 0.25,
		// shadowRadius: 3.84,
		elevation: 5,
		padding: 16,
		width: "100%",
	},
	header: {
		alignItems: "center",
		marginBottom: 16,
	},
	headerText: {
		fontSize: 24,
		fontWeight: "bold",
		color: "#000",
	},
	body: {
		alignItems: "center",
	},
	profileImageContainer: {
		borderWidth: 2,
		borderColor: "lightgray",
		borderRadius: 60,
		overflow: "hidden",
	},
	profileImage: {
		width: 120,
		height: 120,
	},
	label: {
		fontSize: 16,
		fontWeight: "bold",
		color: "#666",
		marginTop: 13,
		alignSelf: "flex-start",
	},
	value: {
		fontSize: 16,
		color: "#000",
		marginBottom: 7,
		alignSelf: "flex-start",
	},
	line: {
		backgroundColor: "lightgray",
		height: 1,
		width: "100%",
		marginTop: 8,
		marginBottom: 8,
	},
	aadharNumberContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		marginTop: 15,
		marginBottom: 15,
	},
	aadharNumber: {
		fontSize: 24,
		fontWeight: "bold",
		color: "#000",
		letterSpacing: 4,
		textAlign: "center",
	},
	editButton: {
		backgroundColor: "#000",
		padding: 8,
		borderRadius: 8,
		marginTop: 16,
		padding: 10,
	},
	editButtonText: {
		fontSize: 15,
		color: "#fff",
		// fontWeight: "bold",
	},
	studentIdStyle: {
		alignSelf: "center",
		fontSize: 16,
		fontWeight: "bold",
		color: "#666",
		marginTop: 13,
	},
});

export default Profile;
