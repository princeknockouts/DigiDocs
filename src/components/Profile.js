import React, { Component } from "react";
import { ScrollView, StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { appBackgroundColor } from "../extras/ConstantValues";

class Profile extends Component {
    render() {

        const {
            scrollViewStyle,
            profileImageViewStyle,
            profileImageStyle,
            editButtonStyle,
            iconImageStyle,
            detailsViewStyle,
            infoViewStyle,
            textStyle,
            viewDetailStyle,
            detailTextStyle,
        } = styles;

        return (
            <ScrollView style={scrollViewStyle}>
                <View style={profileImageViewStyle}>
                    <Image style={profileImageStyle} />
                </View>
                <TouchableOpacity
                    style={editButtonStyle}
                    onPress={()=>{
                        this.props.navigation.navigate('EditProfile')
                    }}
                >
                    <Image style={iconImageStyle} source={require("../assets/icons/edit.png")} resizeMode='contain' />
                </TouchableOpacity>
                <View style={detailsViewStyle}>
                <View style={infoViewStyle}>
                        <Text style={textStyle}>Student ID :</Text>
                        <View style={viewDetailStyle}>
                            <Text style={detailTextStyle}>123456789</Text>
                        </View>
                    </View>
                    <View style={infoViewStyle}>
                        <Text style={textStyle}>Name :</Text>
                        <View style={viewDetailStyle}>
                            <Text style={detailTextStyle}>Kashyap Kotak</Text>
                        </View>
                    </View>
                    <View style={infoViewStyle}>
                        <Text style={textStyle}>Gender :</Text>
                        <View style={viewDetailStyle}>
                            <Text style={detailTextStyle}>Male</Text>
                        </View>
                    </View>
                    <View style={infoViewStyle}>
                        <Text style={textStyle}>Name :</Text>
                        <View style={viewDetailStyle}>
                            <Text style={detailTextStyle}></Text>
                        </View>
                    </View>
                    <View style={infoViewStyle}>
                        <Text style={textStyle}>Name :</Text>
                        <View style={viewDetailStyle}>
                            <Text style={detailTextStyle}></Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    scrollViewStyle: {
        backgroundColor: appBackgroundColor,
    },
    profileImageViewStyle: {
        height: 180,
        width: 180,
        borderRadius: 90,
        borderColor: 'black',
        borderWidth: 1,
        alignSelf: "center",
        marginTop: 30,
    },
    profileImageStyle: {
        height: 180,
        width: 180,
        borderRadius: 90,
    },
    editButtonStyle: {
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: "flex-end",
        marginRight: 20,
    },
    iconImageStyle: {
        height: 30,
    },
    detailsViewStyle:{
        marginTop: 30,
    },
    infoViewStyle:{
        flexDirection: 'row',
        alignSelf: 'center',
        width: "90%",
        justifyContent: 'space-around',
        marginTop: 20,
    },
    textStyle:{
        alignSelf: 'center',
        fontSize: 18,
        flexWrap: "wrap",
        width: "28%"
    },
    viewDetailStyle:{
        borderBottomWidth: 1,
        borderRightWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        width: '75%',
        paddingLeft: 20,
        height: 40,
        justifyContent: 'center',
    },
    detailTextStyle:{
        color: 'black',
    },
})

export default Profile;