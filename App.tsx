/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Button,
  StatusBar,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function App() {
  const [firstNumber, setFirstNumber] = React.useState('');
  const [userInput, setUserInput] = React.useState('');
  const [operation, setOperation] = React.useState('');
  const calculate = () => {
    if (firstNumber === '' || userInput === '' || operation === '') {
      return '';
    }

    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(userInput);
    let result = 0;
    switch (operation) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
    }
    return result.toString();
  };

  return (
    <SafeAreaProvider>
      <View style={{ flexDirection: 'column', top: 50, padding: 20 }}>
        <View style={{ marginBottom: 20 }}>
          <TextInput
            placeholder="Type here..."
            readOnly={true}
            value={userInput}
          />
        </View>
        <View
          style={{
            marginBottom: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <View style={{ width: 70 }}>
            <Button
              title="1"
              onPress={() => {
                setUserInput(userInput + '1');
              }}
            />
          </View>
          <View style={{ width: 70 }}>
            <Button
              title="2"
              onPress={() => {
                setUserInput(userInput + '2');
              }}
            />
          </View>
          <View style={{ width: 70 }}>
            <Button
              title="3"
              onPress={() => {
                setUserInput(userInput + '3');
              }}
            />
          </View>
          <View style={{ width: 70 }}>
            <Button
              title="+"
              onPress={() => {
                setOperation('+');
                setFirstNumber(calculate() || userInput);
                setUserInput('');
              }}
            />
          </View>
        </View>
        <View
          style={{
            marginBottom: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <View style={{ width: 70 }}>
            <Button title="4" onPress={() => setUserInput(userInput + '4')} />
          </View>
          <View style={{ width: 70 }}>
            <Button title="5" onPress={() => setUserInput(userInput + '5')} />
          </View>
          <View style={{ width: 70 }}>
            <Button title="6" onPress={() => setUserInput(userInput + '6')} />
          </View>
          <View style={{ width: 70 }}>
            <Button
              title="-"
              onPress={() => {
                setOperation('-');
                setFirstNumber(userInput);
                setUserInput('');
              }}
            />
          </View>
        </View>
        <View
          style={{
            marginBottom: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <View style={{ width: 70 }}>
            <Button title="7" onPress={() => setUserInput(userInput + '7')} />
          </View>
          <View style={{ width: 70 }}>
            <Button title="8" onPress={() => setUserInput(userInput + '8')} />
          </View>
          <View style={{ width: 70 }}>
            <Button title="9" onPress={() => setUserInput(userInput + '9')} />
          </View>
          <View style={{ width: 70 }}>
            <Button
              title="*"
              onPress={() => {
                setOperation('*');
                setFirstNumber(userInput);
                setUserInput('');
              }}
            />
          </View>
        </View>
        <View
          style={{
            marginBottom: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <View style={{ width: 70 }}>
            <Button
              title="Clear"
              onPress={() => {
                setUserInput('');
                setFirstNumber('');
                setOperation('');
              }}
            />
          </View>
          <View style={{ width: 70 }}>
            <Button title="0" onPress={() => setUserInput(userInput + '0')} />
          </View>
          <View style={{ width: 70 }}>
            <Button title="=" onPress={() => setUserInput(calculate() || '')} />
          </View>
          <View style={{ width: 70 }}>
            <Button
              title="/"
              onPress={() => {
                setOperation('/');
                setFirstNumber(userInput);
                setUserInput('');
              }}
            />
          </View>
        </View>
      </View>
    </SafeAreaProvider>
  );
}

export default App;
