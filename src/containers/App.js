import { connect } from 'react-redux';
import { storeRecipes, getFavs } from '../actions';
import App from '../components/App';

const mapDispatchToProps = (dispatch) => {
  return {
    storeRecipes: (recipes) => {
      dispatch(storeRecipes(recipes))
    },
    getFavs: (recipes) => {
      dispatch(getFavs(recipes))
    }
  }
}

export default connect(null, mapDispatchToProps)(App)
