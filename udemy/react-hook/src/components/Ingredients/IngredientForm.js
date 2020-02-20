import React, { memo, useState } from 'react';

import Card from '../UI/Card';
import './IngredientForm.css';

const IngredientForm = memo(props => {
  // const [inputState, setInputState] = useState({ title: "", amount: "" });

  // const inputChangedHandler = event => {
  //   const value = event.target.value;
  //   const param = event.target.id;
  //   setInputState(prevInputState => ({ ...prevInputState, [param]: value }));
  // }

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const submitHandler = event => {
    event.preventDefault();
    // ...
  };

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={event => setTitle(event.target.value)} />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              valule={amount}
              onChange={event => setAmount(event.target.value)} />
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
