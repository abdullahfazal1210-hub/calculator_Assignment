/**
 * Simple React Native Calculator App
 * Clean Black & White Theme
 * Supports basic (+, -, *, /) and advanced (%, √, x², power) operations
 */

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const screenWidth = Dimensions.get('window').width;

function App() {
  // 🔹 States for numbers, operation, and result
  const [firstNumber, setFirstNumber] = useState('');
  const [userInput, setUserInput] = useState('');
  const [operation, setOperation] = useState('');
  const [result, setResult] = useState('');

  // 🔹 Calculation logic
  const calculate = () => {
    if (firstNumber === '' || userInput === '' || operation === '') return '';

    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(userInput);
    let res = 0;

    switch (operation) {
      case '+':
        res = num1 + num2;
        break;
      case '-':
        res = num1 - num2;
        break;
      case '*':
        res = num1 * num2;
        break;
      case '/':
        res = num1 / num2;
        break;
      case '%':
        res = (num1 / 100) * num2;
        break;
      case '^':
        res = Math.pow(num1, num2);
        break;
      default:
        res = 0;
    }

    return res.toString();
  };

  // 🔹 Handle operation button press
  const handleOperation = (op) => {
    const res = calculate();
    if (res !== '') {
      setFirstNumber(res);
    } else {
      setFirstNumber(userInput);
    }
    setUserInput('');
    setOperation(op);
    setResult('');
  };

  // 🔹 Handle equals (=)
  const handleEquals = () => {
    const res = calculate();
    setResult(res);
    setUserInput(res);
    setFirstNumber('');
    setOperation('');
  };

  // 🔹 Handle advanced operations (√, x²)
  const handleAdvanced = (type) => {
    if (userInput === '') return;
    const num = parseFloat(userInput);
    let res = 0;

    if (type === 'sqrt') res = Math.sqrt(num);
    else if (type === 'square') res = Math.pow(num, 2);

    setResult(res.toString());
    setUserInput(res.toString());
    setFirstNumber('');
    setOperation('');
  };

  // 🔹 Clear everything
  const clearAll = () => {
    setUserInput('');
    setFirstNumber('');
    setOperation('');
    setResult('');
  };

  // 🔹 Add numbers to input
  const handleNumberPress = (num) => {
    setUserInput(userInput + num);
  };

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        {/* Display section */}
        <View style={styles.displayContainer}>
          <Text style={styles.expressionText}>
            {firstNumber} {operation} {userInput}
          </Text>
          <Text style={styles.resultText}>{result}</Text>
        </View>

        {/* Button grid */}
        <View style={styles.buttonGrid}>
          <Row>
            <CalcButton title="7" onPress={() => handleNumberPress('7')} />
            <CalcButton title="8" onPress={() => handleNumberPress('8')} />
            <CalcButton title="9" onPress={() => handleNumberPress('9')} />
            <CalcButton title="/" onPress={() => handleOperation('/')} />
          </Row>

          <Row>
            <CalcButton title="4" onPress={() => handleNumberPress('4')} />
            <CalcButton title="5" onPress={() => handleNumberPress('5')} />
            <CalcButton title="6" onPress={() => handleNumberPress('6')} />
            <CalcButton title="*" onPress={() => handleOperation('*')} />
          </Row>

          <Row>
            <CalcButton title="1" onPress={() => handleNumberPress('1')} />
            <CalcButton title="2" onPress={() => handleNumberPress('2')} />
            <CalcButton title="3" onPress={() => handleNumberPress('3')} />
            <CalcButton title="-" onPress={() => handleOperation('-')} />
          </Row>

          <Row>
            <CalcButton title="0" onPress={() => handleNumberPress('0')} />
            <CalcButton title="." onPress={() => handleNumberPress('.')} />
            <CalcButton title="=" onPress={handleEquals} />
            <CalcButton title="+" onPress={() => handleOperation('+')} />
          </Row>

          <Row>
            <CalcButton title="C" onPress={clearAll} />
            <CalcButton title="√" onPress={() => handleAdvanced('sqrt')} />
            <CalcButton title="x²" onPress={() => handleAdvanced('square')} />
            <CalcButton title="%" onPress={() => handleOperation('%')} />
          </Row>

          <Row>
            <CalcButton title="xʸ" onPress={() => handleOperation('^')} />
          </Row>
        </View>
      </View>
    </SafeAreaProvider>
  );
}

// 🔹 Row Component
const Row = ({ children }) => <View style={styles.row}>{children}</View>;

// 🔹 Button Component
const CalcButton = ({ title, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

// 🔹 Styles (Black & White Theme)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    alignItems: 'center',
  },
  displayContainer: {
    width: screenWidth * 0.9,
    backgroundColor: '#000',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  expressionText: {
    color: '#aaa',
    fontSize: 22,
    textAlign: 'right',
  },
  resultText: {
    color: '#fff',
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'right',
    marginTop: 5,
  },
  buttonGrid: {
    width: screenWidth * 0.9,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
    paddingVertical: 18,
    borderRadius: 10,
    backgroundColor: '#000',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default App;
