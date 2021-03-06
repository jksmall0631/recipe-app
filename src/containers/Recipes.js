import { connect } from 'react-redux';
import { addFav, moveToSingle } from '../actions';
import Recipes from '../components/Recipes';

const mapStateToProps = (state) => {
  return {
    recipes: state.storeRecipes.recipes,
    user: state.setUser.uid
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (recipe) => {
      dispatch(addFav(recipe))
    },
    moveToSingle: (recipe) => {
      dispatch(moveToSingle(recipe))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recipes)
