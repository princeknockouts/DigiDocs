import React, { Component } from 'react'
import { ScrollView, StyleSheet, TextInput, TouchableOpacity, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { appBackgroundColor, buttonBorderColor, buttonBorderRadius, buttonTextColor, textInputBorderColor, textInputBorderRadius } from '../extras/ConstantValues';

class EditProfile extends Component {
    render() {

        const {
            scrollViewStyle,
            textInputViewStyle,
            textInputStyle,
            submitButtonStyle,
            buttonTextStyle,
        } = styles;

        return (
            <ScrollView style={scrollViewStyle}>
                <View style={textInputViewStyle}>
                    <TextInput style={textInputStyle} placeholder="First Name" />
                    <TextInput style={textInputStyle} placeholder="Last Name" />
                    <TextInput style={textInputStyle} placeholder="Gender" />
                    <TextInput style={textInputStyle} placeholder="Contact" />
                    <TextInput style={textInputStyle} placeholder="Email ID" />
                    <TouchableOpacity style={submitButtonStyle}>
                        <Text style={buttonTextStyle}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    scrollViewStyle: {
        backgroundColor: appBackgroundColor,
    },
    textInputViewStyle: {
        alignItems: 'center',
        marginTop: 30,
    },
    textInputStyle: {
        borderWidth: 1,
        borderColor: textInputBorderColor,
        borderRadius: textInputBorderRadius,
        height: 50,
        width: "90%",
        marginTop: 20,
        paddingLeft: 10,
    },
    submitButtonStyle: {
        borderWidth: 1,
        borderColor: buttonBorderColor,
        borderRadius: buttonBorderRadius,
        height: 50,
        width: 130,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
    },
    buttonTextStyle: {
        color: buttonTextColor,
    }
});

const mapStateToProps = state => {
    return {
        // code
    }
};

export default connect(mapStateToProps, {
    // code
})(EditProfile);