import { connect } from 'react-redux';
import { storeRecipes } from '../actions';
import App from '../components/App';



const mapDispatchToProps = (dispatch) => {
  return {
    storeRecipes: (recipes) => {
      dispatch(storeRecipes(recipes))
    },
  }
}

export default connect(null, mapDispatchToProps)(App)
