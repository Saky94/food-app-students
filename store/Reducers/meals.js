//importujemoPodatke
import { MEALS } from '../../data/dummy-data';
import { SET_FILTERS, TOGGLE_FAVORITE } from '../Actions/meals';

//postavimo inicijalnu vrednost state
const initialState = {
 meals: MEALS ,
 filters: MEALS,
 favoriteMeals: []
};

//state pocinje inicijalnom vrednoscu
const mealReducer = (state = initialState, action) =>
{   switch(action.type) {
    case TOGGLE_FAVORITE:
        const existingIndex = state.favoriteMeals.findIndex(meal => meal.id === action.mealId);
        if(existingIndex >=0){
        const updateFavMeal = [...state.favoriteMeals];
        updateFavMeal.splice(existingIndex,1);
         return {...state, favoriteMeals: updateFavMeal};
        }
        else 
        {
        const meal = state.meals.find(meal => meal.id === action.mealId);
        return {...state, favoriteMeals: state.favoriteMeals.concat(meal)};
        }
    case SET_FILTERS:
        const appliedActions= action.filters;
        const filteredMeals = state.meals.filter(meal => {
            if( appliedActions.glutenFree && !meal.isGlutenFree)
            {
                return false;
            }
            if( appliedActions.lactoseFree && !meal.isLactoseFree)
            {
                return false;
            }
            if( appliedActions.vegan && !meal.isVegan)
            {
                return false;
            }
            if( appliedActions.vegetarian && !meal.isVegetarian)
            {
                return false;
            }

            return true;
        });
        return {...state, filteredMeals: filteredMeals};
    default: 
    return state;    
}
}

export default mealReducer;