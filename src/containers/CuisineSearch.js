import { connect } from 'react-redux';
import { storeSearchRecipes } from '../actions';
import CuisineSearch from '../components/CuisineSearch';

const mapDispatchToProps = (dispatch) => {
  return {
    storeSearchRecipes: (recipes) => {
      dispatch(storeSearchRecipes(recipes))
    }
  }
}

export default connect(null, mapDispatchToProps)(CuisineSearch)
