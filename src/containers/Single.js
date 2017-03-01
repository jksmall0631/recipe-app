import { connect } from 'react-redux';
import Single from '../components/Single';

const mapStateToProps = (state) => {
  return {
    state: state,
    test: state.moveToSingle,
    recipe: state.moveToSingle.recipe,
  }
}

export default connect(mapStateToProps, null)(Single)
