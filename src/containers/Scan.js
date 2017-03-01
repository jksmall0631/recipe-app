import { connect } from 'react-redux';
import { sendGroceries } from '../actions';
import Scan from '../components/Scan';

const mapStateToProps = (state) => {
  return {
    user: state.setUser.uid
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendGroceries: (grocery) => {
      dispatch(sendGroceries(grocery))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Scan)
