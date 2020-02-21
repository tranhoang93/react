import React, { useState, useEffect } from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';

const Ingredients = () => {
  const [userIngredients, setUserIngredients] = useState([]);

  useEffect(() => {
    fetch("https://react-hook-update-1211.firebaseio.com/ingredients.json")
      .then(response => response.json())
      .then(responseData => {
        const loadingIngredients = [];
        for (let key in responseData) {
          loadingIngredients.push({
            id: key,
            title: responseData[key].title,
            amount: responseData[key].amount
          });
        }
        setUserIngredients(loadingIngredients);
      });
  }, []);

  const filteredIngredientsHandler = filteredIngredients => {
    setUserIngredients(filteredIngredients);
  }

  const addIngredientHandler = ingredient => {
    fetch("https://react-hook-update-1211.firebaseio.com/ingredients.json", {
      method: "POST",
      body: JSON.stringify(ingredient),
      headers: { "Content-Type": "application/json" }
    }).then(response => {
      return response.json();
    }).then(responseData => {
      setUserIngredients(prevUserIngredients => [
        ...prevUserIngredients,
        { id: responseData.name, ...ingredient }
      ]);
    });
  };

  const removeItemHandler = ingredientId => {
    setUserIngredients(prevUserIngredients => prevUserIngredients.filter(ingredient => ingredient.id !== ingredientId))
  };

  return (
    <div className="App">
      <IngredientForm onAddIngredient={addIngredientHandler} />

      <section>
        <Search onLoadIngredients={filteredIngredientsHandler} />
        <IngredientList
          ingredients={userIngredients}
          onRemoveItem={removeItemHandler} />
      </section>
    </div>
  );
}

export default Ingredients;
