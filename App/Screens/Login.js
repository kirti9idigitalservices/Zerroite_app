import { View,StyleSheet,Text, Image, TextInput, TouchableOpacity, ImageBackground } from "react-native";
import * as React from 'react';


export default function Login({navigation}){
return(
    
        <View style={Style.contain}>
             <View 
        style={Style.container}>


< Text style={{ fontSize: 30, fontWeight:'bold',marginLeft: 75, marginTop: 10,}}> User Login </Text>
< Text style={{ fontSize: 12,marginLeft:12, marginTop: 10,}}> Sign in with your social media account or email address</Text>
                
          <TouchableOpacity style={Style.button2} onPress={() => navigation.navigate('')}>
             <Text style={{color:'white', fontSize:15,}}>Login with Facebook</Text>
          </TouchableOpacity>

          <TouchableOpacity style={Style.button3} onPress={() => navigation.navigate('')}>
             <Text style={{color:'white', fontSize:15,}}>Login with Google+</Text>
          </TouchableOpacity>


         <Text style={{ fontSize: 20, fontWeight:'bold',marginLeft: 150, marginTop: 105,}}>or</Text>

         <TextInput
             placeholder="Email"
              style={Style.textstyle}/>
              

               
              <TextInput 
               placeholder="Password" 
               style={Style.textstyle}/>

                    
          <TouchableOpacity style={Style.button} onPress={() => navigation.navigate('')}>
             <Text style={{color:'white', fontSize:15,}}>SIGN IN</Text>
          </TouchableOpacity>


          < Text style={{ fontSize: 12,marginLeft:105, marginTop: 70,}}> Not have an account?</Text>
          <TouchableOpacity  
                onPress={() => navigation.navigate('Signin')}>
        <Text style={{color:'#007bff', marginLeft: 85,}}>Create a new account here</Text></TouchableOpacity>
        
       
      </View>
     
      </View>
      
)
}

var Style=StyleSheet.create({

    contain:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    container:{
       
        height:450,
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
         marginTop:340,
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
        alignItems: "center",
        backgroundColor:"red",
        position:"absolute",
         borderRadius:5,
         marginTop:140,
         marginLeft:15,
         padding: 10,
         width: '90%',
       },
       


     
      textstyle:{

        borderBottomWidth:1,
        color:"grey",
        borderBottomColor:"#787674",
        marginTop:25,
        paddingLeft:10,
        width: 280,
        marginLeft: 20,
      },
})
