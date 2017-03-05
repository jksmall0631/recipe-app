import React from 'react';
import {Link} from 'react-router';

const Recipe = ({recipe, addDeleteFav, moveToSingle, user, symbol}) => {
  console.log(user)
  return (
    <div className='recipe'>
      <h2 className='recipe-title'>{recipe.title}</h2>
      <Link
        to='/single'>
        <img className='img' src={recipe.image} onClick={() => moveToSingle(recipe)} alt={recipe.title}></img>
      </Link>
      {/* <Button title='fav' onClick={onClick(recipe)}/> */}
      {user ? <button className='add-delete' onClick={() => addDeleteFav(recipe)}>{symbol}</button> : ''}
    </div>
  )
}

export default Recipe;
