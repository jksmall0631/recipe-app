import { connect } from 'react-redux';
import Header from '../components/Header';

const mapStateToProps = (state) => {
  return {
    user: state.setUser,
  }
}

export default connect(mapStateToProps, null)(Header)
