import React, {Component} from 'react';

import {
  StyleSheet,
  Text
} from 'react-native';

class Label extends Component {

  textStyle(textColor, textSize, textAlign, characterSpacing, textFamily, textWeight) {

    if (characterSpacing === undefined) {
      characterSpacing = 0;
    }

    if (textWeight === "") {
      textWeight="normal";
    }

    var fontFamily = "";

    if(textFamily !== "") {
      fontFamily = textFamily;
    }

    return {
      fontWeight: textWeight,
      color: textColor,
      fontFamily: textFamily,
      fontSize: textSize,
      textAlign: textAlign,
      letterSpacing: characterSpacing,
    };
  }

  render() {
    const {
      text,
      textColor,
      textSize,
      textWeight,
      textFamily,
      characterSpacing,
      style,
      ellippsizeMode,
      numberOfLines,
      children,
      textAlign,
    } = this.props;
    
    const {defaultTextStyle} = styles;

    return (
      <Text
        numberOfLines={numberOfLines}
        ellipsizeMode={ellippsizeMode}
        style={[
          defaultTextStyle,
          this.textStyle(
            textColor,
            textSize,
            textAlign,
            characterSpacing,
            textFamily,
            textWeight
          ),
          style,
        ]}>
        {text}
        {children}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  defaultTextStyle: {
    fontFamily: 'Ariel',
    color: 'black',
    fontSize: 10,
  },
});

export {Label};
