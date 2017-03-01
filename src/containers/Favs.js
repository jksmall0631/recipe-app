import {connect} from 'react-redux';
import Favs from '../components/Favs';
import {deleteFav, moveToSingle} from '../actions';

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
    },
    moveToSingle: (recipe) => {
      dispatch(moveToSingle(recipe))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favs)
