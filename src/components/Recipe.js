import React from 'react';
import Button from './Button';

const Recipe = ({recipe, addFav}) => {
  return (
    <div>
      <img className='img' src={recipe.image}></img>
      <h2>{recipe.title}</h2>
      {/* <Button title='fav' onClick={onClick(recipe)}/> */}
      <button onClick={() => addFav(recipe)}></button>
    </div>
  )
}

export default Recipe;
