import { MEALS, CATEGORIES } from '../data/dummy-data'
import { View, FlatList, StyleSheet } from 'react-native'
import MealItem from '../components/MealsList/MealItem';
import { useLayoutEffect } from 'react';
import MealsList from '../components/MealsList/MealsList';

export default function MealsOverview({ route, navigation }) {


    // MY EXPERIMENT

    // function pressHandler() {
    //     navigation.navigate("DetailScreen", {
    //         categoryId: itemData.item.id,
    //     });
    // }

    // ENDS


    const catId = route.params.categoryId;

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    })

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === catId).title;

        navigation.setOptions({
            title: categoryTitle,
        });
    }, [catId, navigation])

    
    return <MealsList items={displayedMeals} />
}
