import { View,StyleSheet,Text, Image, TextInput, TouchableOpacity, ScrollView, SafeAreaView, ImageBackground,} from "react-native";
import * as React from 'react';
import { Searchbar } from 'react-native-paper'; 
import ImageSlider from 'react-native-image-slider';


export default function HomePage({navigation}){


  
    const [searchQuery, setSearchQuery] = React.useState('');
  3
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
      < Text style={{ fontSize: 20, fontWeight:'bold', marginTop:4, marginLeft:10,}}> Grocery </Text>
      <ScrollView horizontal={true}>
                
      <View style={{flexDirection:'row'}}>
      <View style={styles.RectangleShapeView4}>
          <Image style={styles.image1} source={require('../img/cat5.jpg')}/>
          < Text style={{ fontSize: 15, fontWeight:'bold',color:'black',marginTop:5, marginLeft:32,}}>
            Vegetables </Text>
        </View>

        <View style={styles.RectangleShapeView4}>
          <Image style={styles.image1} source={require('../img/m1.jpg')}/>
          < Text style={{ fontSize: 15, fontWeight:'bold',color:'black',marginTop:5, marginLeft:37,}}>
            Pulse </Text>
        </View>

        <View style={styles.RectangleShapeView4}>
          <Image style={styles.image1} source={require('../img/m2.jpg')}/>
          < Text style={{ fontSize: 15, fontWeight:'bold',color:'black',marginTop:5, marginLeft:37,}}>
            Pulse </Text>
        </View>

        
        <View style={styles.RectangleShapeView4}>
          <Image style={styles.image1} source={require('../img/m3.jpg')}/>
          < Text style={{ fontSize: 15, fontWeight:'bold',color:'black',marginTop:5, marginLeft:35,}}>
            Vegetables</Text>
        </View>

        
        <View style={styles.RectangleShapeView4}>
          <Image style={styles.image1} source={require('../img/cat3.jpg')}/>
          < Text style={{ fontSize: 15, fontWeight:'bold',color:'black',marginTop:5, marginLeft:32,}}>
            Pulse </Text>
        </View>


        
        <View style={styles.RectangleShapeView4}>
          <Image style={styles.image1} source={require('../img/cat2.jpg')}/>
          < Text style={{ fontSize: 15, fontWeight:'bold',color:'black',marginTop:5, marginLeft:32,}}>
            Vegetables</Text>
        </View>

        </View>
        </ScrollView>


      <View>
      < Text style={{ fontSize: 20, fontWeight:'bold', marginTop:4, marginLeft:10,}}> Shop by Section </Text>
      <View style={{flexDirection:'row',}}>
        <View style={styles.RectangleShapeView2}>
          <ImageBackground style={styles.image} source={require('../img/banner1.jpg')}>
          < Text style={{ fontSize: 15, fontWeight:'bold', marginTop:10,marginLeft:15,color:'white'}}>
            Fresh Fruit and Vegetable On Products </Text>

            < Text style={{ fontSize:15, marginTop:27,marginLeft:15,color:'white'}}>
            Shop Now </Text>
          </ImageBackground>
        </View>

        <View style={styles.RectangleShapeView3}>
          <ImageBackground style={styles.image} source={require('../img/banner2-min.jpg')}>
          < Text style={{ fontSize: 15, fontWeight:'bold', marginTop:10,marginLeft:15,color:'white'}}>
            Fresh Fruit and Vegetable On Products </Text>
         
            < Text style={{ fontSize:15, marginTop:27,marginLeft:15,color:'white'}}>
            Shop Now </Text>

          </ImageBackground>
        </View>

        </View>
        <View style={{flexDirection:'row',}}>
        <View style={styles.RectangleShapeView2}>
          <ImageBackground style={styles.image} source={require('../img/banner1.jpg')}>
          < Text style={{ fontSize: 15, fontWeight:'bold', marginTop:10,marginLeft:15,color:'white'}}>
            Fresh Fruit and Vegetable On Products </Text>

            < Text style={{ fontSize:15, marginTop:27,marginLeft:15,color:'white'}}>
            Shop Now </Text>
          </ImageBackground>
        </View>

        <View style={styles.RectangleShapeView3}>
          <ImageBackground style={styles.image} source={require('../img/banner2-min.jpg')}>
          < Text style={{ fontSize: 15, fontWeight:'bold', marginTop:10,marginLeft:15,color:'white'}}>
            Fresh Fruit and Vegetable On Products </Text>
         
            < Text style={{ fontSize:15, marginTop:27,marginLeft:15,color:'white'}}>
            Shop Now </Text>

          </ImageBackground>
        </View>

        </View>

        <View style={{flexDirection:'row',}}>
        <View style={styles.RectangleShapeView2}>
          <ImageBackground style={styles.image} source={require('../img/banner1.jpg')}>
          < Text style={{ fontSize: 15, fontWeight:'bold', marginTop:10,marginLeft:15,color:'white'}}>
            Fresh Fruit and Vegetable On Products </Text>

            < Text style={{ fontSize:15, marginTop:27,marginLeft:15,color:'white'}}>
            Shop Now </Text>
          </ImageBackground>
        </View>

        <View style={styles.RectangleShapeView3}>
          <ImageBackground style={styles.image} source={require('../img/banner2-min.jpg')}>
          < Text style={{ fontSize: 15, fontWeight:'bold', marginTop:10,marginLeft:15,color:'white'}}>
            Fresh Fruit and Vegetable On Products </Text>
         
            < Text style={{ fontSize:15, marginTop:27,marginLeft:15,color:'white'}}>
            Shop Now </Text>

          </ImageBackground>
        </View>

        </View>
        
         </View> 

< Text style={{ fontSize: 20, fontWeight:'bold', marginTop:4, marginLeft:10,}}> Exclusive Offer </Text>
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


        
< Text style={{ fontSize: 20, fontWeight:'bold', marginTop:4, marginLeft:10,}}>Best Offer </Text>
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
            backgroundColor: 'pink',
            marginTop:5,
            },
    
            
        RectangleShapeView2: {
          width: 170,
          height: 140,
          backgroundColor: '#ccc',
         // flexDirection: 'row',
          marginTop:5,
          marginLeft: 10,
          },
  
               
        RectangleShapeView3: {
          width: 170,
          height: 140,
          backgroundColor: 'yellow',
         // flexDirection: 'row',
          marginTop:5,
          marginRight: 10,
          marginLeft:5,
          },

                 
        RectangleShapeView4: {
            width: 120,
            height: 100,
            backgroundColor: 'white',
           // flexDirection: 'row',
            marginTop:5,
            marginRight: 10,
            marginLeft:5,
            },
  
 
   image:{
              height: '100%',
              width: '100%',
   },
          
   image1:{
    height: '50%',
    width: '45%',
    marginLeft:30,
    marginRight:30,
    marginTop:20,

    
  
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
