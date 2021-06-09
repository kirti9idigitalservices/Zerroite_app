import { View,StyleSheet,Text, Image, TextInput, TouchableOpacity,} from "react-native";
import * as React from 'react';
import { Searchbar } from 'react-native-paper'; 
import ImageSlider from 'react-native-image-slider';


export default function HomePage({navigation}){


  
    const [searchQuery, setSearchQuery] = React.useState('');
  
    const onChangeSearch = query => setSearchQuery(query);
   
     
    
    return (
        
        <View styles={styles.container}>
          
            <View style={styles.RectangleShapeView}>
           
            <Searchbar
             style={styles.searchbar}
                placeholder="Search for products"
                onChangeText={onChangeSearch}
                value={searchQuery}/>
          
           </View> 
           
      <View style={styles.RectangleShapeView1}>
      <ImageSlider images={[
    'http://placeimg.com/640/480/any',
    'http://placeimg.com/640/480/any',
    'http://placeimg.com/640/480/any',
    require('../img/b11.jpg')
  ]}/>
      </View>       
    </View>
     
    );
  }
 

  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 2,

    },
    RectangleShapeView: {
        width: '100%',
        height: 50,
        backgroundColor: '#45B39D',
        flexDirection: 'row',
      
       
        },

        RectangleShapeView1: {
            width: '100%',
            height: 90,
            backgroundColor: 'red',
            flexDirection: 'row',
            marginTop:5,
            },
    

 
   image:{
              height: 33,
              width: 30,
              marginLeft: 8,
              marginTop: 15,
          },
    searchbar:{
      width:'80%',
      marginLeft:5,
      height: 30,
      marginLeft: 3,
      marginTop: 10,
      //backgroundColor: '#45B39D',
    },  

});
