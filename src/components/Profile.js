import React, { Component } from "react";
import { ScrollView, StyleSheet, View, Image, Text } from "react-native";

class Profile extends Component {
    render() {

        const {
            scrollViewStyle,
            profileImageViewStyle,
            detailsViewStyle,
            infoViewStyle,
            textStyle,
            viewDetailStyle,
            detailTextStyle,
        } = styles;

        return (
            <ScrollView style={scrollViewStyle}>
                <View style={profileImageViewStyle}>
                    <Image />
                </View>
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
        backgroundColor: "white",
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