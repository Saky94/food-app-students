import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Platform, TouchableNativeFeedback} from 'react-native';

const CategoryGridTemplate = props => {
    let TouchableCmp= TouchableNativeFeedback;
    if(Platform.OS === 'android' && Platform.Version >= 21)
    {
        TouchableCmp = TouchableNativeFeedback;
    }
    return(
    <View style={styles.grid} >
    <TouchableCmp style={{flex:1}} onPress={props.onSelect}
    >
          <View style={{...styles.gridStyle,...{backgroundColor : props.color}}}>
          <Text style={styles.titleStyle} numberOfLines={2}>{props.title}</Text>
          </View>
          </TouchableCmp> 
          </View>
    );
};

const styles= StyleSheet.create({
    
    grid:{
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
        overflow: Platform.OS ==='android' && Platform.Version >= 21 ? 'hidden': 'visible',
        elevation: 5
        

    },
    gridStyle:{
        flex:1,
        borderRadius: 6,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center'

    },
    titleStyle:{
        fontFamily: 'open-sans-bold',
        fontSize:15,
        textAlign: 'center'
    }
});

export default CategoryGridTemplate;

