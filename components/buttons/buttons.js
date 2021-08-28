import React, {Component, Fragment} from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

class CustomButtons extends Component {
  render() {
    const {typeButton, label, action} = this.props;
    const buttonStyles = [styles.button];
    const textStyles = [styles.text];

    if (typeButton === 'buttonTop') {
      buttonStyles.push(styles.buttonTop);
    }
    if (typeButton === 'buttonVertical') {
      buttonStyles.push(styles.buttonVertical);
      textStyles.push(styles.textSecondary);
    }
    if (typeButton === 'buttonLarge') {
      buttonStyles.push(styles.buttonLarge);
    }
    return (
      <Fragment>
        <TouchableOpacity style={buttonStyles} onPress={action}>
          <Text style={textStyles}>{label}</Text>
        </TouchableOpacity>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  buttonLarge: {
    flex: 2,
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
  textSecondary: {
    color: 'white',
  },
  button: {
    backgroundColor: '#1f1f1f',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    margin: 5,
  },
  buttonTop: {
    backgroundColor: '#9e9e9e',
  },
  buttonVertical: {
    backgroundColor: '#f9a825',
  },
});

export default CustomButtons;
