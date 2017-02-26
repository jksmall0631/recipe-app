import React from 'react';
import Button from './Button';
import {Link} from 'react-router';

const Recipe = ({recipe, addFav, moveToSingle}) => {
  return (
    <div>
      <Link
        to='/single'>
        <img className='img' src={recipe.image} onClick={() => moveToSingle(recipe)}></img>
      </Link>
      <h2>{recipe.title}</h2>
      {/* <Button title='fav' onClick={onClick(recipe)}/> */}
      <button onClick={() => addFav(recipe)}></button>
    </div>
  )
}

export default Recipe;
