import { connect } from 'react-redux';
import Header from '../components/Header';
import {signOut, userLogout} from '../actions';

const mapStateToProps = (state) => {
  return {
    user: state.setUser,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => {
      dispatch(signOut())
    },
    userLogout: () => {
      dispatch(userLogout())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
