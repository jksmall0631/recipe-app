import { connect } from 'react-redux';
import { setUser } from '../actions';
import SignUpSection from '../components/SignUpSection';

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (email, uid) => {
      dispatch(setUser(email, uid))
    }
  }
}

export default connect(null, mapDispatchToProps)(SignUpSection)
