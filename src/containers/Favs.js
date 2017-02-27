import {connect} from 'react-redux';
import Favs from '../components/Favs';
import {deleteFav} from '../actions';

const mapStateToProps = (state) => {
  return {
    favs: state.storeFavs,
    user: state.setUser.uid
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteFav: (recipe) => {
      dispatch(deleteFav(recipe))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favs)
