import React, {Component, PureComponent} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CustomButtons from './components/buttons/buttons';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      valuesText: '0',
      resultsText: '',
    };
    this.operators = ['+', '-', '*', '/'];
    this.resetCalculator = this.resetCalculator.bind(this);
    this.equal = this.equal.bind(this);
  }
  /** Cambio para repositorio */
  /** SE EJECUTA AL PRESIONAR CUALQUIER BOTON DE TIPO NUMERICO */

  numberPress(text) {
    console.log(text);
    const {valuesText} = this.state;
    if (valuesText === '0') {
      return this.setState({valuesText: text});
    }
    return this.setState({valuesText: valuesText + text});
  }
  /** SE REINICIA LA CALCULADORA AL PRESIONAR EL BOTON C */
  resetCalculator() {
    console.log('Reset Calculator');
    const {valuesText, resultsText} = this.state;
    this.setState({valuesText: '0', resultsText: ''});
  }
  /** SE EJECUTA AL PRESIONAR EL BOTON DE IGUAL
   * VALIDA SI EL ULTIMO CARACTER NO ES UN SIMBOLO PARA NO CRASHEAR
   * Y RETORNA EL RESULTADO DE LA OPERACION
   */
  equal() {
    const {valuesText} = this.state;
    switch (valuesText.slice(-1)) {
      case '+':
      case '-':
      case '*':
      case '/':
        return false;
    }
    console.log(valuesText, eval(valuesText));
    this.setState({
      resultsText: eval(valuesText),
    });
  }
  /** SE EJECUTA AL PRESIONAR CUALQUIER OPERACION ARITMETICA */
  operation(symbol) {
    console.log(symbol);
    const {valuesText, resultsText} = this.state;
    switch (symbol) {
      case 'D':
        let text = valuesText.split('');
        text.pop();
        this.setState({valuesText: text.join('')});
        break;
      case '+':
      case '-':
      case '*':
      case '/':
        const lastChar = this.state.valuesText.split('').pop();

        if (this.operators.indexOf(lastChar) > -1) {
          let text = valuesText.split('');
          text.pop();
          this.setState({valuesText: text.join('') + symbol});
          return;
        }

        if (valuesText == '') return;
        this.setState({
          valuesText: valuesText + symbol,
        });

      default:
        break;
    }
  }

  render() {
    const {valuesText, resultsText} = this.state;
    console.log('render');
    return (
      <View style={styles.container}>
        <View style={styles.values}>
          <Text style={styles.valuesText}>{valuesText}</Text>
        </View>
        <View style={styles.results}>
          <Text style={styles.resultsText}>{resultsText}</Text>
        </View>
        <View style={styles.buttons}>
          <View style={styles.rowButton}>
            <CustomButtons
              typeButton="buttonTop"
              label="C"
              action={this.resetCalculator}></CustomButtons>
            <CustomButtons
              typeButton="buttonTop"
              label="%"
              action={() => this.operation('%')}></CustomButtons>
            <CustomButtons
              typeButton="buttonTop"
              label="/"
              action={() => this.operation('/')}></CustomButtons>
            <CustomButtons
              typeButton="buttonVertical"
              label="DEL"
              action={() => this.operation('D')}></CustomButtons>
          </View>
          <View style={styles.rowButton}>
            <CustomButtons
              label="7"
              action={() => this.numberPress('7')}></CustomButtons>
            <CustomButtons
              label="8"
              action={() => this.numberPress('8')}></CustomButtons>
            <CustomButtons
              label="9"
              action={() => this.numberPress('9')}></CustomButtons>
            <CustomButtons
              typeButton="buttonVertical"
              label="x"
              action={() => this.operation('*')}></CustomButtons>
          </View>
          <View style={styles.rowButton}>
            <CustomButtons
              label="4"
              action={() => this.numberPress('4')}></CustomButtons>
            <CustomButtons
              label="5"
              action={() => this.numberPress('5')}></CustomButtons>
            <CustomButtons
              label="6"
              action={() => this.numberPress('6')}></CustomButtons>
            <CustomButtons
              typeButton="buttonVertical"
              label="-"
              action={() => this.operation('-')}></CustomButtons>
          </View>
          <View style={styles.rowButton}>
            <CustomButtons
              label="1"
              action={() => this.numberPress('1')}></CustomButtons>
            <CustomButtons
              label="2"
              action={() => this.numberPress('2')}></CustomButtons>
            <CustomButtons
              label="3"
              action={() => this.numberPress('3')}></CustomButtons>
            <CustomButtons
              typeButton="buttonVertical"
              label="+"
              action={() => this.operation('+')}></CustomButtons>
          </View>
          <View style={styles.rowButton}>
            <CustomButtons
              typeButton="buttonLarge"
              label="0"
              action={() => this.numberPress('0')}></CustomButtons>
            <CustomButtons
              label="."
              action={() => this.numberPress('.')}></CustomButtons>
            <CustomButtons
              typeButton="buttonVertical"
              label="="
              action={this.equal}></CustomButtons>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  values: {
    backgroundColor: 'black',
    flex: 3,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  valuesText: {
    fontSize: 40,
    color: 'white',
  },
  results: {
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'flex-end',
    flex: 1,
  },
  resultsText: {
    fontSize: 30,
    color: 'white',
  },
  buttons: {
    flex: 6,
  },
  rowButton: {
    flexDirection: 'row',
    flex: 5,
  },
  space: {
    backgroundColor: 'blue',
    flex: 1,
  },
});

export default App;
