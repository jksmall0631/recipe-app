import React from 'react';
// import {Link} from 'react-router';

const Single = (props) => {
  let recipe = props.recipe
  let ingredients = recipe.extendedIngredients.map(ingredient => {
    return (<li key={ingredient.id}>{ingredient.originalString}</li>)
  })
  return (
    <div>
      <img className='img' src={recipe.image} alt={recipe.title}></img>
      <h2>{recipe.title}</h2>
      <ul>{ingredients}</ul>
      <p>{recipe.instructions}</p>
      <h4>${(recipe.pricePerServing * 0.01).toFixed(2)} per serving</h4>
    </div>
  )
}

export default Single;
