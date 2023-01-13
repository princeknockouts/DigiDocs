import React, { Component } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { connect } from 'react-redux';

class CheckOTP extends Component {
    render() {

        const {
            // code
        } = styles;

        return (
            <ScrollView>
                <View>
                    {/* code */}
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    // code
});

const mapStateToProps = state => {
    return {
        // code
    };
}

export default connect(mapStateToProps, {
    // code
})(CheckOTP);