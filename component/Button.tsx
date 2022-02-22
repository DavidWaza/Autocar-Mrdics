import React, { useState, FC } from "react";
import { TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/globalStyles";
import { Dimensions, View, Text, StyleSheet, TextInput } from "react-native"


type props = {
    title:string,
    onPress:() => void
  }
  const Button:FC <props> = (props) =>{
    return(
        <View>
        <TouchableOpacity style={globalStyles.button} onPress={props.onPress}>
            <Text style={styles.text}>{props.title}</Text>
        </TouchableOpacity>
        </View>
    )
  } 
  const styles = StyleSheet.create({

    text: {
      marginTop: 13,
      fontSize: 13,
      color: "white",
    },
  });
  export default Button;

  