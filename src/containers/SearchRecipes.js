import { connect } from 'react-redux';
import { addFav, moveToSingle } from '../actions';
import SearchRecipes from '../components/SearchRecipes';

const mapStateToProps = (state) => {
  return {
    recipes: state.storeSearchRecipes.recipes,
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchRecipes)
