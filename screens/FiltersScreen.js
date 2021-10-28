import React, {useState, useEffect, useCallback} from "react";
import {View,Text,StyleSheet, Switch, Platform} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import colors from "../constants/colors";

//switchForCall
const FilterSwitch = props =>
{
    return(
<View style={styles.filterContainer}>
    <Text>{props.switchComponent}</Text>
<Switch 
trackColor={{true: colors.accentColor}}
thumbColor={Platform.OS === 'android' ? colors.accentColor : 'white'}
value={props.state} 
onValueChange={props.onChange}/>
</View>
    );
}

//filters(Switch+useState)
const FiltersScreen = props => {

const { navigation } = props;   
const [isGlutenFree, setIsGlutenFree]= useState(false);
const [isLactoseFree, setIsLactoseFree]= useState(false);
const [isVegan, setIsVegan]= useState(false);
const [isVegetarian, setIsVegetarian]= useState(false);

//componentSaveFilterFuncionality
const saveFilters = useCallback(() => {
    const appliedFilter={
        glutenFree:isGlutenFree,
        lactoseFree:isLactoseFree,
        vegan:isVegan,
        vegetarian:isVegetarian
    };
    console.log(appliedFilter);
}, [isGlutenFree,isLactoseFree, isVegan, isVegetarian]);

//forwardSaveFiltersToNavigation(useEffect)
 useEffect (()=>{
    props.navigation.setParams({save: saveFilters});
 },[saveFilters]);

    return ( 
        <View style={styles.screen}>
            <Text style={styles.title}>Available Filters / Restrictions</Text>
            <FilterSwitch switchComponent= 'Gluten Free' state={isGlutenFree} onChange={newValue => setIsGlutenFree(newValue)}/>
            <FilterSwitch switchComponent= 'Lactose Free' state={isLactoseFree} onChange={newValue => setIsLactoseFree(newValue)}/>
            <FilterSwitch switchComponent= 'Vegan' state={isVegan} onChange={newValue => setIsVegan(newValue)}/>
            <FilterSwitch switchComponent= 'Vegetarian' state={isVegetarian} onChange={newValue => setIsVegetarian(newValue)}/>
        </View>
     );
}

//Import-MeniIcon+SaveButton
FiltersScreen.navigationOptions = navData => {
    return {
    headerTitle:'Your Filters Meals',
    headerLeft: () => ( 
    <HeaderButtons HeaderButtonComponent={HeaderButton}>
        < Item title="Menu" iconName='ios-menu' onPress={() => {
        navData.navigation.toggleDrawer();
        }} />
    </HeaderButtons>
    ),
    headerRight: () => ( 
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
            < Item title="SAVE" iconName='ios-save' 
            onPress={
            navData.navigation.getParam('save')} 
            />
        </HeaderButtons>
    )
    };
};



const styles=StyleSheet.create({
    screen:{
        flex:1,
        alignItems:'center'
    },
    title:{
        fontFamily: 'open-sans-bold',
        fontSize:20,
        textAlign:'center',
        margin: 20
    },
    filterContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%'

    }
});
 
export default FiltersScreen;