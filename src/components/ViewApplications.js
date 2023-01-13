import React, { Component } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { appBackgroundColor } from "../extras/ConstantValues";

class ViewApplications extends Component {
    render() {

        const {
            scrollViewStyle,
        } = styles;

        return (
            <ScrollView style={scrollViewStyle}>
                {/* code */}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    scrollViewStyle: {
        backgroundColor: appBackgroundColor,
    }
})

export default ViewApplications;