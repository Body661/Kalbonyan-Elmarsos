import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'

import CourseGoalList from './components/CourseGoals/CourseGoalList/CourseGoalList';
import CourseInput from './components/CourseGoals/CourseInput/CourseInput';
import './App.css';
import FilterGoals from './components/FilterGoals/filterGoals';

export const getSavedGoals = () => {
  const goalsJSON = localStorage.getItem('goals')
  if (goalsJSON !== null) {
    return JSON.parse(goalsJSON)
  } else {
    return []
  }
}

let goals = getSavedGoals()

const saveGoals = () => {
  localStorage.setItem('goals', JSON.stringify(goals))
}

const App = () => {
  const [, setCourseGoals] = useState(goals);

  const addGoalHandler = enteredText => {
    setCourseGoals(prevGoals => {
      goals = [...prevGoals];
      goals.unshift({ text: enteredText, id: uuidv4(), check: false });
      saveGoals()
      return goals;
    });
  };

  const deleteItemHandler = goalId => {
    setCourseGoals(prevGoals => {
      goals = prevGoals.filter(goal => goal.id !== goalId);
      saveGoals()
      return goals;
    });
  };

  const checkItemHadler = (goalID) => {
    const goal = goals.find((goal) => goal.id === goalID)
    goal.check = !goal.check

    setCourseGoals(prevGoals => {
      goals = [...prevGoals];
      return goals;
    });
    saveGoals()
  }

  let content = (
    <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
  );

  if (goals.length > 0) {
    content = (
      <CourseGoalList items={goals} onDeleteItem={deleteItemHandler} onCheck={checkItemHadler} />
    );
  }

  return (
    <div>
      <section id="goal-form">
        <CourseInput onAddGoal={addGoalHandler} />
      </section>
      <section id="goals">
        {content}
      </section>
    </div>
  );
};

export default App;
