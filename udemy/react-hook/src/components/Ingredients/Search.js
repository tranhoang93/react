import React, { memo, useState, useEffect } from 'react';

import Card from '../UI/Card';
import './Search.css';

const Search = ({ onLoadIngredients }) => {
  const [enteredFilter, setEnteredFilter] = useState("");

  useEffect(() => {
    const query = enteredFilter.length === 0 ? '' : `?orderBy="title"&equalTo="${enteredFilter}"`;
    fetch("https://react-hook-update-1211.firebaseio.com/ingredients.json" + query)
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
        onLoadIngredients(loadingIngredients)
      });
  }, [enteredFilter, onLoadIngredients]);

  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input
            type="text"
            value={enteredFilter}
            onChange={event => setEnteredFilter(event.target.value)}
          />
        </div>
      </Card>
    </section>
  );
};

export default memo(Search);
