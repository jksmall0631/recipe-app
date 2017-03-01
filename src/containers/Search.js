import { connect } from 'react-redux';
import { storeSearchRecipes } from '../actions';
import Search from '../components/Search';

const mapDispatchToProps = (dispatch) => {
  return {
    storeSearchRecipes: (recipes) => {
      dispatch(storeSearchRecipes(recipes))
    }
  }
}

export default connect(null, mapDispatchToProps)(Search)
