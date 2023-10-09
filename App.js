import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import styles from "./App.style";

export default function App() {
  const [result, setResult] = useState('');
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operator, setOperator] = useState('');

  const handleNum = (num) => {
    if(!result){
      if (!operator) {
        setNum1(num1 + num.toString());
        if(num == '.' && !num1){
          setNum1('');
        }
      } else {
        setNum2(num2 + num.toString());
        if(num == '.' && !num2){
          setNum2('');
        }
      }
    }
    else{

      if(num != '.'){
        setNum1(num);
        setResult('');
        setNum2('');
        setOperator('');
      }
    }
  };

  const handleOperator = (op) => {
    if (num1 && result) {
      setOperator(op);
      setNum1(result);
      setNum2('');
      setResult('');
    }
    else if (num1 && num2) {
      setOperator(op);
      setNum1(Number(num1) + Number(num2));
      setNum2('');
      setResult('');
    }
    else if (num1) {
      setOperator(op);
      setNum1(Number(num1));
    }
    else{
      setOperator('');
    }
  };

  const handleResult = () => {
    let res;
    switch (operator) {
      case '+':
        res = Number(num1) + Number(num2);
        break;
      case '-':
        res = Number(num1) - Number(num2);
        break;
      case '*':
        res = Number(num1) * Number(num2);
        break;
      case '/':
        res = Number(num1) / Number(num2);
        break;
    }
    setResult(res.toString());
    setNum2(Number(num2));
  };
  
  const negative_signe = () => {
    if(num1 && !num2){
      setNum1(Number(-num1));
    }
    if(num1 && num2){
      setNum2(Number(-num2));
    }
    if(result){
      setNum1(Number(-result));
      setNum2('');
      setOperator('');
      setResult('');
    }
  };

  const handleClearAll = () => {
    setResult('');
    setNum1('');
    setNum2('');
    setOperator('');
  };
  const handleClear = () => {
    if (num1 && num2) {
      setNum2(Number(num2%10));
    }
    else if (num1) {
      setNum1(Number(num1%10));
    }
  };

  
  return (
    <View style={styles.container}>
      <View style={styles.monitor_chow}>
        <Text style={styles.monitorText}>{num1} {operator} {num2}</Text>
        <Text style={styles.resultText}>{result? '= ':''}{result}</Text>
      </View>
      <View style={styles.monitor_buttons}>
        <View style={styles.row}>
          <TouchableOpacity style={[styles.button, styles.clearButton]} onPress={handleClearAll}>
            <Text style={styles.operatorButtonText}>C</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.clearButton]} onPress={handleClear}>
            <Text style={styles.operatorButtonText}>c</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button]} onPress={() => handleOperator('/')}>
            <Text style={styles.operatorButtonText}>/</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button]} onPress={() => handleOperator('*')}>
            <Text style={styles.operatorButtonText}>*</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => handleNum(7)}>
            <Text style={styles.buttonText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleNum(8)}>
            <Text style={styles.buttonText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleNum(9)}>
            <Text style={styles.buttonText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button]} onPress={() => handleOperator('-')}>
            <Text style={styles.operatorButtonText}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => handleNum(4)}>
            <Text style={styles.buttonText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleNum(5)}>
            <Text style={styles.buttonText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleNum(6)}>
            <Text style={styles.buttonText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button]} onPress={() => handleOperator('+')}>
            <Text style={styles.operatorButtonText}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => handleNum(1)}>
            <Text style={styles.buttonText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleNum(2)}>
            <Text style={styles.buttonText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleNum(3)}>
            <Text style={styles.buttonText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button]} onPress={() => negative_signe()}>
            <Text style={styles.operatorButtonText}>+/-</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => handleNum('.')}>
            <Text style={styles.buttonText}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleNum(0)}>
            <Text style={styles.buttonText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.operatorButton]} onPress={handleResult}>
            <Text style={styles.buttonTextoperator}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
  

}
