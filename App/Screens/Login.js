import { View,StyleSheet,Text, Image, TextInput, TouchableOpacity, } from "react-native";
import * as React from 'react';
import { StatusBar } from "expo-status-bar";
import { useState } from "react";


export default function Login({navigation}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  return (
    <View style={styles.container}>
       <Image style={styles.lock} source={require("../img/icon/logo.png")} />

       
< Text style={{ fontSize: 40, fontWeight:'bold', marginTop:8,}}> User Login </Text>
< Text style={{ fontSize: 14, marginTop: 3,color:'grey',}}> Sign in with your social media account or email address</Text>
  
        
          <TouchableOpacity style={styles.loginBtn}onPress={() => navigation.navigate('')}>
             <Text style={styles.loginText}>Login with Facebook</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.loginBtn1} onPress={() => navigation.navigate('')}>
             <Text style={styles.loginText}>Login with Google</Text>
          </TouchableOpacity>

          <Text style={{ fontSize: 20, fontWeight:'bold',}}>----------------or------------------</Text>

      <StatusBar style="auto" />

      <Text style={{ fontSize: 20, fontWeight:'bold',marginRight: 190,}}>Email Address</Text>
      <View style={styles.inputView}>
      
     
        <TextInput
          style={styles.TextInput}
          placeholder="Enter Email Address"
          placeholderTextColor="grey"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

     <Text style={{ fontSize: 20, fontWeight:'bold',marginRight: 230,}}>Password</Text>
      <View style={styles.inputView}>
    
  
        
        <TextInput
          style={styles.TextInput}
          placeholder=" Enter Password"
          placeholderTextColor="grey"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
        
      </View>
 
      
 
      <TouchableOpacity style={styles.loginBtn2}>
        <Text style={styles.loginText}>SIGN IN</Text>
      </TouchableOpacity>

       
     <Text  style={{  marginTop: 3,}}>Don't have an account?
     <TouchableOpacity  
       onPress={() => navigation.navigate('Signin')}>
   <Text style={{color:'#007bff',}}>Sign UP</Text></TouchableOpacity> </Text>

    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
   
  },
 
  lock:{
    height:70,
    width:200,
  },
 loginText:{
    color: "white",
    fontWeight:'bold',
    fontSize:15,
  },

  inputView: {
    backgroundColor: "#ccc",
    borderRadius: 10,
    width: "90%",
    height: 40,
    marginBottom: 5,
  },
 
  TextInput: {
    height: 45,
    marginLeft: 15,
  },

 
  loginBtn: {
    width: "94%",
    borderRadius: 10,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: "#007bff",
  },

  
  loginBtn1: {
    width: "94%",
    borderRadius: 10,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: "red",
  },

  
  loginBtn2: {
    width: "40%",
    borderRadius: 10,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: "#007bff",
  },
});