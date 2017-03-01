import { connect } from 'react-redux';
import Fridge from '../components/Fridge';

const mapStateToProps = (state) => {
  return {
    groceries: state.storeGroceries,
  }
}

export default connect(mapStateToProps, null)(Fridge)
