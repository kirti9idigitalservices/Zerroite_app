import { View,StyleSheet,Text, Image, TextInput, TouchableOpacity, } from "react-native";
import * as React from 'react';
import { StatusBar } from "expo-status-bar";
import { useState } from "react";


export default function Signin({navigation}) {
  const [Fname, setFname] = useState("");
  const [Lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Cpassword, setCPassword] = useState("");
 
  return (
    <View style={styles.container}>           
       <Image style={styles.lock} source={require("../img/icon/logo.png")} />

       
< Text style={{ fontSize:25, fontWeight:'bold', marginTop:8,}}> Create an Account </Text>
< Text style={{ fontSize: 14, marginTop: 3,color:'grey',}}> Sign in with your social media account or email address</Text>
  
        
          <TouchableOpacity style={styles.loginBtn}onPress={() => navigation.navigate('')}>
             <Text style={styles.loginText}>Login with Facebook</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.loginBtn1} onPress={() => navigation.navigate('')}>
             <Text style={styles.loginText}>Login with Google</Text>
          </TouchableOpacity>

          <Text style={{ fontSize: 20, fontWeight:'bold',}}>----------------or------------------</Text>

      <StatusBar style="auto" />

      <View style={{flexDirection:'row',}}>
<View>
      <Text style={{ fontSize: 15, fontWeight:'bold',marginRight: 80,}}>First name</Text>
      <View style={styles.inputView2}>
      
     
        <TextInput
          style={styles.TextInput}
          placeholder="First name"
          placeholderTextColor="grey"
          onChangeText={(Fname) => setFname(Fname)}
        />
      </View>
      </View>

<View>
      <Text style={{ fontSize: 15, fontWeight:'bold',marginRight:100,}}>Last name</Text>
      <View style={styles.inputView2}>
      
     
        <TextInput
          style={styles.TextInput}
          placeholder="Last name"
          placeholderTextColor="grey"
          onChangeText={(Lname) => setLname(Lname)}
        />
      </View>

      </View>
      </View>

      <Text style={{ fontSize: 15, fontWeight:'bold',marginRight: 230,}}>Email Address</Text>
      <View style={styles.inputView}>
      
     
        <TextInput
          style={styles.TextInput}
          placeholder="Enter Email Address"
          placeholderTextColor="grey"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

     <Text style={{ fontSize: 15, fontWeight:'bold',marginRight: 260,}}>Password</Text>
      <View style={styles.inputView}>
    
  
        
        <TextInput
          style={styles.TextInput}
          placeholder=" Enter Password"
          placeholderTextColor="grey"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
        
      </View>
 
      <Text style={{ fontSize: 15, fontWeight:'bold',marginRight: 200,}}>Confirm Password</Text>
      <View style={styles.inputView}>
    
  
        
        <TextInput
          style={styles.TextInput}
          placeholder=" Enter Confirm Password"
          placeholderTextColor="grey"
          secureTextEntry={true}
          onChangeText={(Cpassword) => setCPassword(Cpassword)}
        />
        
      </View>
 
      <TouchableOpacity style={styles.loginBtn2}>
        <Text style={styles.loginText}>SIGN UP</Text>
      </TouchableOpacity>

       
     <Text  style={{  marginTop: 3,}}>Already have an account?
     <TouchableOpacity  
       onPress={() => navigation.navigate('Login')}>
   <Text style={{color:'#007bff',}}>Sign In</Text></TouchableOpacity> </Text>

    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
  flex:1,
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
    height: 35,
    marginBottom: 5,
  },
 
  TextInput: {
    height: 45,
    marginLeft: 10,
  },

  
  inputView2: {
    backgroundColor: "#ccc",
    borderRadius: 10,
    width: '95%',
    height: 35,
    marginBottom: 5,
    
  },
 
  loginBtn: {
    width: "94%",
    borderRadius: 10,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: "#007bff",
  },

  
  loginBtn1: {
    width: "94%",
    borderRadius: 10,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: "red",
  },

  
  loginBtn2: {
    width: "40%",
    borderRadius: 10,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: "#007bff",
  },
});