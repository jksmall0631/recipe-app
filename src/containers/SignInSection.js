import { connect } from 'react-redux';
import { setUser } from '../actions';
import SignInSection from '../components/SignInSection';

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (email, uid) => {
      dispatch(setUser(email, uid))
    }
  }
}

export default connect(null, mapDispatchToProps)(SignInSection)
