import React, { useState, useEffect } from 'react';

import IngredientForm from './IngredientForm';
import Search from './Search';

import IngredientList from './IngredientList';
import { useCallback } from 'react';

function Ingredients() {
  const [ingredientsList, setIngredientsList] = useState([])

  const filteredData = useCallback((data) => {
    setIngredientsList(data)
  }, [])

  const addIngredientHandler = (data) => {
    fetch('https://ingredients-app-6abe7-default-rtdb.firebaseio.com/ingredientsList.json', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      return response.json()
    }).then((responseData) => {
      setIngredientsList((prevState) => {
        return [{ id: responseData.name, ...data }, ...prevState]
      })
    })
  }

  const removeIngredientHandler = (id) => {
    fetch(`https://ingredients-app-6abe7-default-rtdb.firebaseio.com/ingredientsList/${id}.json`, {
      method: 'DELETE',
    }).then((response) => {
      setIngredientsList((prevState) => {
        return prevState.filter((ig) => ig.id !== id)
      })
    })
  }
  return (
    <div className="App">
      <IngredientForm onAddIngredient={addIngredientHandler} />

      <section>
        <Search onSearch={filteredData} />
        <IngredientList ingredients={ingredientsList} onRemoveItem={removeIngredientHandler} />
      </section>
    </div>
  );
}

export default Ingredients;
