import React from "react";
import MealsSummary from "./MealsSummary";
import AvaibleMeals from "./AvaibleMeals";

const MealItem = (props) => {

    return (
        <React.Fragment>
            <MealsSummary />
            <AvaibleMeals />
        </React.Fragment>
    )
}

export default MealItem