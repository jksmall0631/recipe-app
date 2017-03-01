import React from 'react';
import {Link} from 'react-router';

const Recipe = ({recipe, addDeleteFav, moveToSingle, user}) => {
  return (
    <div className='recipe'>
      <h2 className='recipe-title'>{recipe.title}</h2>
      <Link
        to='/single'>
        <img className='img' src={recipe.image} onClick={() => moveToSingle(recipe)} alt={recipe.title}></img>
      </Link>
      {/* <Button title='fav' onClick={onClick(recipe)}/> */}
      {user ? <button onClick={() => addDeleteFav(recipe)}></button> : ''}
    </div>
  )
}

export default Recipe;
