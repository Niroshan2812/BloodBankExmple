import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { useState } from "react";
import {Button,View,Text,StyleSheet,TouchableOpacity,Image,TextInput,} from "react-native";

const PasswordScreen = () =>{
    const [NewPassword, setNewPassword] = useState("");
  const [Confirmpassword, setConfirmpassword] = useState("");
  //password error hndling
  return (
    <View style={styles.container3}>
      <View style={styles.content}>
        <Image style={styles.logo} source={require("../images/image4.png")} />

        <Text style={styles.label2}>New Password</Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          selectionColor={"#5188E3"}
          onChangeText={(NewPassword) => setNewPassword(NewPassword)}
        />

        <Text style={styles.label2}>Confirm Password</Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          selectionColor={"#5188E3"}
          onChangeText={(Confirmpassword) =>
            setConfirmpassword(Confirmpassword)
          }
        />

        <View>
          <TouchableOpacity style={styles.RegisterBtn}>
            <Text style={styles.RegisterText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  
    container1: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "-50%",
    },
  
    container2: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "-120%",
    },
  
    container3: {
      flex: 1,
      width: "100%",
      marginTop: "0%",
      backgroundColor: "#fff",
    },
    input: {
      borderStyle: "solid",
      borderColor: "#B7B7B7",
      borderRadius: 7,
      borderWidth: 1,
      fontSize: 15,
      height: 50,
      marginHorizontal: 10,
      paddingStart: 10,
      marginBottom: 15,
    },
    content: {
      width: "90%",
      marginTop: "10%",
    },
    content2: {
      width: "90%",
      marginTop: "0.5%",
    },
  
    label2: {
      marginHorizontal: 10,
      marginBottom: 15,
      fontWeight: "bold",
    },
  
    text: {
      fontWeight: "bold",
      alignItems: "center",
      fontSize: 20,
      marginTop: "-20%",
    },
  
    TextHead: {
      fontWeight: "bold",
      fontSize: 20,
      textAlign: "center",
      marginTop: "1%",
    },
  
    image: {
      marginBottom: 30,
      width: 200,
      height: 200,
      marginHorizontal: "20%",
    },
  
    inputView: {
      backgroundColor: "#FFC0CB",
      borderRadius: 5,
      width: "70%",
      height: 50,
      marginBottom: 20,
      alignItems: "center",
    },
  
    TextInput: {
      height: 50,
      flex: 1,
      padding: 10,
      marginLeft: 20,
      fontWeight: "bold",
      borderColor: "#B7B7B7",
    },
  
    RegisterBtn: {
      width: "90%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 20,
      backgroundColor: "#FF1493",
      marginHorizontal: "2%",
    },
  
    fixToText: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: "-30%",
    },
    fixToTxt: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: "10%",
    },
  
    TextBody: {
      fontSize: 12,
      textAlign: "justify",
      marginLeft: "0.99%",
      marginVertical: 8,
      marginHorizontal: 6,
      fontWeight: "bold",
      color: "red",
    },
    logo: {
      marginBottom: 30,
      width: 300,
      height: 300,
      marginTop: "-20%",
      marginHorizontal: "10%",
    },
  
    img: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 20,
      width: 100,
      height: 100,
      marginTop: "5%",
      marginLeft: "-40%",
    },
  
    dropdownAge: {
      marginHorizontal: 10,
      marginBottom: 15,
      width: "93%",
    },
    dropdown: {
      borderColor: "#B7B7B7",
      height: 50,
    },
    placeholderStyles: {
      color: "black",
    },
    label: {
      marginBottom: 7,
      marginStart: 10,
      fontWeight: "bold",
    },
  
    inputView1: {
      backgroundColor: "#FFC0CB",
      borderRadius: 5,
      width: "70%",
      height: 50,
      marginBottom: 20,
      alignItems: "center",
    },
  
    map: {
      position: "absolute",
      width: "100%",
      height: "100%",
    },
  });
  export default PasswordScreen;
