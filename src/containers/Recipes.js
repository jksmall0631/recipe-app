import { connect } from 'react-redux';
import { addFav, moveToSingle } from '../actions';
import Recipes from '../components/Recipes';

const mapStateToProps = (state) => {
  return {
    recipes: state.storeRecipes.recipes,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // storeRecipes: (recipes) => {
    //   dispatch(storeRecipes(recipes))
    // },
    addFav: (recipe) => {
      dispatch(addFav(recipe))
    },
    moveToSingle: (recipe) => {
      dispatch(moveToSingle(recipe))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recipes)
