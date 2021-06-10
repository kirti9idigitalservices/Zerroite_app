import { View,StyleSheet,Text, Image, TextInput, TouchableOpacity, ScrollView, SafeAreaView, ImageBackground,} from "react-native";
import * as React from 'react';
import { Searchbar } from 'react-native-paper'; 
import ImageSlider from 'react-native-image-slider';


export default function HomePage({navigation}){


  
    const [searchQuery, setSearchQuery] = React.useState('');
  
    const onChangeSearch = query => setSearchQuery(query);
   
     
    
    return (
        <SafeAreaView style={{marginBottom: 120,}}>
        <View styles={styles.container}>
          
            <View style={styles.RectangleShapeView}>
           
            <Searchbar
             style={styles.searchbar}
                placeholder="Search for products"
                onChangeText={onChangeSearch}
                value={searchQuery}/>
          
           </View> 
           <ScrollView>
      <View style={styles.RectangleShapeView1}>
      <ImageSlider images={['http://placeimg.com/640/480/any',
    require('../img/b11.jpg')
  ]}/>
      </View>  

      <View>
      < Text style={{ fontSize: 20, fontWeight:'bold', marginTop:4, marginLeft:10,}}> Shop by Section </Text>
      <View style={{flexDirection:'row',}}>
        <View style={styles.RectangleShapeView2}>
          <ImageBackground style={styles.image} source={require('../img/banner1.jpg')}>
          < Text style={{ fontSize: 18, fontWeight:'bold', marginTop:10,marginLeft:15,color:'white'}}>
            Fresh Fruit and Vegetable On Products </Text>

            < Text style={{ fontSize:15, marginTop:27,marginLeft:15,color:'white'}}>
            Shop Now </Text>
          </ImageBackground>
        </View>

        <View style={styles.RectangleShapeView3}>
          <ImageBackground style={styles.image} source={require('../img/banner2-min.jpg')}>
          < Text style={{ fontSize: 18, fontWeight:'bold', marginTop:10,marginLeft:15,color:'white'}}>
            Fresh Fruit and Vegetable On Products </Text>
         
            < Text style={{ fontSize:15, marginTop:27,marginLeft:15,color:'white'}}>
            Shop Now </Text>

          </ImageBackground>
        </View>

        </View>
        <View style={{flexDirection:'row',}}>
        <View style={styles.RectangleShapeView2}>
          <ImageBackground style={styles.image} source={require('../img/banner1.jpg')}>
          < Text style={{ fontSize: 18, fontWeight:'bold', marginTop:10,marginLeft:15,color:'white'}}>
            Fresh Fruit and Vegetable On Products </Text>

            < Text style={{ fontSize:15, marginTop:27,marginLeft:15,color:'white'}}>
            Shop Now </Text>
          </ImageBackground>
        </View>

        <View style={styles.RectangleShapeView3}>
          <ImageBackground style={styles.image} source={require('../img/banner2-min.jpg')}>
          < Text style={{ fontSize: 18, fontWeight:'bold', marginTop:10,marginLeft:15,color:'white'}}>
            Fresh Fruit and Vegetable On Products </Text>
         
            < Text style={{ fontSize:15, marginTop:27,marginLeft:15,color:'white'}}>
            Shop Now </Text>

          </ImageBackground>
        </View>

        </View>

        <View style={{flexDirection:'row',}}>
        <View style={styles.RectangleShapeView2}>
          <ImageBackground style={styles.image} source={require('../img/banner1.jpg')}>
          < Text style={{ fontSize: 18, fontWeight:'bold', marginTop:10,marginLeft:15,color:'white'}}>
            Fresh Fruit and Vegetable On Products </Text>

            < Text style={{ fontSize:15, marginTop:27,marginLeft:15,color:'white'}}>
            Shop Now </Text>
          </ImageBackground>
        </View>

        <View style={styles.RectangleShapeView3}>
          <ImageBackground style={styles.image} source={require('../img/banner2-min.jpg')}>
          < Text style={{ fontSize: 18, fontWeight:'bold', marginTop:10,marginLeft:15,color:'white'}}>
            Fresh Fruit and Vegetable On Products </Text>
         
            < Text style={{ fontSize:15, marginTop:27,marginLeft:15,color:'white'}}>
            Shop Now </Text>

          </ImageBackground>
        </View>

        </View>


        < Text style={{ fontSize: 20, fontWeight:'bold', marginTop:4, marginLeft:10,}}> Exclusive Offer </Text>
     </View> 

     <ScrollView horizontal={true}>
                
                <View style={{flexDirection:'row'}}>
      <View style={styles.RectangleShapeView2}>
          <Image style={styles.image} source={require('../img/cat5.jpg')}/>
        </View>

        <View style={styles.RectangleShapeView2}>
          <Image style={styles.image} source={require('../img/m1.jpg')}/>
        </View>

        <View style={styles.RectangleShapeView2}>
          <Image style={styles.image} source={require('../img/m2.jpg')}/>
        </View>

        
        <View style={styles.RectangleShapeView2}>
          <Image style={styles.image} source={require('../img/m3.jpg')}/>
        </View>

        
        <View style={styles.RectangleShapeView2}>
          <Image style={styles.image} source={require('../img/cat3.jpg')}/>
        </View>


        
        <View style={styles.RectangleShapeView2}>
          <Image style={styles.image} source={require('../img/cat2.jpg')}/>
        </View>

        </View>
        </ScrollView>
            
       

        </ScrollView>   
    </View>
    </SafeAreaView>
     
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
            //flexDirection: 'row',
            marginTop:5,
            },
    
            
        RectangleShapeView2: {
          width: 170,
          height: 140,
          backgroundColor: 'red',
          flexDirection: 'row',
          marginTop:5,
          marginLeft: 10,
          },
  
               
        RectangleShapeView3: {
          width: 170,
          height: 140,
          backgroundColor: 'red',
          flexDirection: 'row',
          marginTop:5,
          marginRight: 10,
          marginLeft:5,
          },

 
   image:{
              height: '100%',
              width: '100%',
            
          
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
