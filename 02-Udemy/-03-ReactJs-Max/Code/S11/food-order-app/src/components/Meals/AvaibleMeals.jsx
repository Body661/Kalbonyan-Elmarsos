import React from 'react';
import classes from './AvaibleMeals.module.css'
import Card from '../UI/Card';
import MealItem from './MealItem';
import { v4 as uuidv4 } from 'uuid';

const MealsList = [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99,
    },
    {
        id: 'm2',
        name: 'Schnitzel',
        description: 'A german specialty!',
        price: 16.5,
    },
    {
        id: 'm3',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 12.99,
    },
    {
        id: 'm4',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 18.99,
    },
];

const AvaibleMeals = () => {
    return (
        <section className={classes.meals}>
            <Card >
                <ul>
                    {
                        MealsList.map((meal) => <MealItem
                            id={meal.id}
                            key={meal.id}
                            name={meal.name}
                            description={meal.description}
                            price={meal.price} />
                        )
                    }
                </ul>
            </Card>
        </section>
    )
}

export default AvaibleMeals