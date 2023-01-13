import React, { Component } from 'react'
import { ScrollView, StyleSheet, TextInput, TouchableOpacity, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { appBackgroundColor, buttonBorderColor, buttonBorderRadius, buttonTextColor, textInputBorderColor, textInputBorderRadius } from '../extras/ConstantValues';
import {
    profileFirstNameValueChanged,
    profileLastNameValueChanged,
    profileGenderValueChanged,
    profileContactValueChanged,
    profileEmailValueChanged,
} from '../actions';

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
                    <TextInput
                        style={textInputStyle}
                        placeholder="First Name"
                        value={this.props.first_name}
                        onChangeText={(value) => {
                            this.props.profileFirstNameValueChanged(value);
                        }}
                    />
                    <TextInput
                        style={textInputStyle}
                        placeholder="Last Name"
                        value={this.props.last_name}
                        onChangeText={(value) => {
                            this.props.profileLastNameValueChanged(value);
                        }}
                    />
                    <TextInput
                        style={textInputStyle}
                        placeholder="Gender"
                        value={this.props.gender}
                        onChangeText={(value) => {
                            this.props.profileGenderValueChanged(value);
                        }}
                    />
                    <TextInput
                        style={textInputStyle}
                        placeholder="Contact"
                        value={this.props.contact}
                        onChangeText={(value) => {
                            this.props.profileContactValueChanged(value);
                        }}
                    />
                    <TextInput 
                        style={textInputStyle}
                        placeholder="Email ID"
                        value={this.props.email_id}
                        onChangeText={(value) => {
                            this.props.profileEmailValueChanged(value);
                        }}
                    />
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
        first_name: state.profile.first_name,
        last_name: state.profile.last_name,
        gender: state.profile.gender,
        contact: state.profile.contact,
        email_id: state.profile.email_id,
    }
};

export default connect(mapStateToProps, {
    profileFirstNameValueChanged,
    profileLastNameValueChanged,
    profileGenderValueChanged,
    profileContactValueChanged,
    profileEmailValueChanged,
})(EditProfile);