import React, { useCallback, useEffect, useState } from "react";
import classes from "./AvaibleMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem";
const AvaibleMeals = () => {
  const [MealsList, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const getMeals = useCallback(async () => {
    try {
      setError(null);

      const response = await fetch(
        "https://food-order-6438a-default-rtdb.firebaseio.com/meals.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const data = await response.json();
      const loadedMeals = [];

      for (const key in data) {
        loadedMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }

      setMeals(loadedMeals);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    getMeals();
  }, [getMeals]);

  const noItemsFound = !isLoading && MealsList.length === 0 && !error && (
    <p>No items found</p>
  );

  if (!error && !isLoading && MealsList.length === 0) {
    if (isLoading) {
      return (
        <section className={classes.MealsLoading}>
          <Card>
            <p>No items found</p>
          </Card>
        </section>
      );
    }
  }

  if (isLoading) {
    return (
      <section className={classes.MealsLoading}>
        <Card>
          <p>Loading...</p>
        </Card>
      </section>
    );
  }

  if (error && !isLoading) {
    return (
      <section className={classes.MealsLoading}>
        <Card>
          <p className={classes.error}>{error}</p>
        </Card>
      </section>
    );
  }

  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {!isLoading &&
            MealsList.length > 0 &&
            MealsList.map((meal) => (
              <MealItem
                id={meal.id}
                key={meal.id}
                name={meal.name}
                description={meal.description}
                price={meal.price}
              />
            ))}
          {noItemsFound}
        </ul>
      </Card>
    </section>
  );
};

export default AvaibleMeals;
