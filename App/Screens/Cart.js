import { View,StyleSheet,Text, Image, TextInput, TouchableOpacity, ImageBackground } from "react-native";
import * as React from 'react';


export default function Cart({navigation}){

    return(
        <View style={Style.container}>
           < Text style={{ fontSize: 25, fontWeight:'bold', marginTop: 10,}}> Cart empty </Text>

           <TouchableOpacity style={Style.button3} onPress={() => navigation.navigate('HomePage')}>
               <Text style={{color:'blue', fontSize:15,}}>Go to Shopping</Text>
          </TouchableOpacity>

        </View>
    );

 }

 var Style=StyleSheet.create({

    container:{
        
            flex:1,
            alignItems:'center',
            justifyContent:'center',
        
    },

    button3: {
        
        alignItems: "center",
        backgroundColor:"white",
         borderRadius:5,
         marginTop:20,
         marginLeft:15,
         padding: 10,
         width: '40%',
        borderColor:'blue',
         borderWidth: 1,
       },
 });
 
