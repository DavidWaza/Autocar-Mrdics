import React, { useState, FC } from "react";
import { Dimensions, View, Text, StyleSheet, TextInput } from "react-native";

interface props {
  style: any;
  placeholderTextColor: string;
  placeholder: string;
  secureTextEntry: boolean;
  onChangeText: (text: string) => void;
}

const Input: FC<props> = (props) => {
  return (
    <View>
      <TextInput
        style={props.style}
        placeholderTextColor={props.placeholderTextColor}
        placeholder={props.placeholder}
        onChangeText={props.onChangeText}
        secureTextEntry={props.secureTextEntry || false}
      />
    </View>
  );
};
export default Input;
