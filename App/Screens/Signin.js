import { View,StyleSheet,Text, Image, TextInput, TouchableOpacity, ImageBackground } from "react-native";
import * as React from 'react';


export default function Signin({navigation}){

    return(
        <View style={Style.contain}>
        <View 
   style={Style.container}>


< Text style={{ fontSize: 25, fontWeight:'bold',marginLeft: 55, marginTop: 10,}}> Create an Account </Text>
< Text style={{ fontSize: 12,marginLeft:12, marginTop: 10,}}> Sign up with your social media account or email address</Text>
           
     <TouchableOpacity style={Style.button2} onPress={() => navigation.navigate('')}>
        <Text style={{color:'white', fontSize:15, }}>Login with Facebook</Text>
     </TouchableOpacity>


  
   
           <TouchableOpacity style={Style.button3} onPress={() => navigation.navigate('')}>
             
                 <Image style={Style.lock} source={require("../img/icon/Google.png")} />
                 <Text style={{color:'grey', fontSize:15,}}> Login with Google</Text>
          </TouchableOpacity>
         



    <Text style={{ fontSize: 20, fontWeight:'bold',marginLeft: 150, marginTop: 110,}}>or</Text>

    <TextInput
        placeholder="Name"
         style={Style.textstyle}/>

    <TextInput
        placeholder="Email"
         style={Style.textstyle}/>
         

          
         <TextInput 
          placeholder="Password" 
          style={Style.textstyle}/>

         <TextInput 
          placeholder=" Confirm Password" 
          style={Style.textstyle}/>

               
     <TouchableOpacity style={Style.button} onPress={() => navigation.navigate('')}>
        <Text style={{color:'white', fontSize:15,}}>SIGN UP</Text>
     </TouchableOpacity>


   

     <Text  style={{marginLeft:85,  marginTop: 80,}}>Already have an account?
     <TouchableOpacity  
           onPress={() => navigation.navigate('Login')}>
   <Text style={{color:'#007bff',}}>Login</Text></TouchableOpacity> </Text>
   
  
 </View>

 </View>
 
    );

 }

 var Style=StyleSheet.create({
        
    contain:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    container:{
       
        height:550,
        width:330,
        backgroundColor:"white",
        position:"absolute",
        marginLeft:15,
        marginTop:80

    },
  

   
    button: {

        alignItems: "center",
        backgroundColor:"#007bff",
        position:"absolute",
         borderRadius:5,
         marginTop:440,
         marginLeft:15,
         padding: 10,
         width: '90%',
      },

       button2: {
        alignItems: "center",
        backgroundColor:"#007bff",
        position:"absolute",
         borderRadius:5,
         marginTop:90,
         marginLeft:15,
         padding: 10,
         width: '90%',
       },
       button3: {
        //alignItems: "center",
        backgroundColor:"white",
        position:"absolute",
         borderRadius:5,
         marginTop:140,
         marginLeft:15,
         padding: 10,
         width: '90%',
         flexDirection:'row',
         borderColor:'grey',
         borderWidth: 1,
       },
       


     
      textstyle:{

        borderBottomWidth:1,
        color:"grey",
        borderBottomColor:"#787674",
        marginTop:20,
        paddingLeft:10,
        width: 280,
        marginLeft: 20,
      },

      lock:{
        height:20,
        width:20,
      padding:10,
        marginLeft:15,
    
      },
    

 });
 
