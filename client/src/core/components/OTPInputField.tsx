import React, { useEffect } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

const OTPInputField = ({code, setCode, setPinReady, MAX_CODE_LENGTH} : any) => {
  const inputs: (TextInput)[] = [];

  useEffect(() => {
    if (code.join('').length === MAX_CODE_LENGTH) {
      setPinReady(true);
    } else {
      setPinReady(false);
    }
  })

  const handleOTPChange = (value : any, index : any) => {
    const otp = [...code];
    otp[index] = value;
    setCode(otp);
    
    if (value && index < otp.length - 1) {
      inputs[index + 1].focus();
    }
  };
  
  return (
    <View style={styles.container}>
      {code.map((digit : any, index : any) => (
        <TextInput
          key={index}
          style={styles.box}
          maxLength={1}
          keyboardType="numeric"
          onChangeText={(value) => handleOTPChange(value, index)}
          value={digit}
          ref={(input : any) => {
            inputs[index] = input;
          }}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    borderRadius: 5,
    backgroundColor: 'white',
    width: 50,
    height: 50,
    margin: 5,
    textAlign: 'center',
    fontSize: 20,
  },
});

export default OTPInputField;