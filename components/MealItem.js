import React from "react";
import {View, Text, StyleSheet,TouchableOpacity, ImageBackground} from 'react-native';

//image
const MealItem = props => {
    return ( 
    <View style={styles.generalStyle}>
    <TouchableOpacity onPress={props.onSelectMeal}>
    <View>
        <View style={{...styles.mealRow, ...styles.mealHeader}}>
            <ImageBackground source={{uri: props.image}} style={styles.imageStyle}>   
           <View style={styles.titleContainer}>
                <Text style={styles.titleStyle}>{props.title}</Text>
            </View>
            </ImageBackground>
        </View>
        <View style={{...styles.mealRow, ...styles.mealDetail}}>
            <Text>{props.duration}m</Text>
            <Text>{props.complexity.toUpperCase()}</Text>
            <Text>{props.affordability.toUpperCase()}</Text>
        </View>
    </View> 
    </TouchableOpacity>
    </View>
        );
}

const styles= StyleSheet.create({
    mealRow:{
        flexDirection: 'row'
    },
    generalStyle:{
        height: 200,
        width:'100%',
        backgroundColor: '#e6e6e6',
        marginVertical:10
    },
    mealHeader:{
        height: '90%'
    },
mealDetail:{
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center'
},
imageStyle:{
    width:'100%',
    height:'100%',
    justifyContent: 'center',
    alignItems: 'center'
},
titleContainer:{
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal:12,
    paddingVertical:5
},
titleStyle:{
    fontFamily: 'open-sans-bold',
    fontSize: 15,
    color: 'white'
    
    
}

});

export default MealItem;