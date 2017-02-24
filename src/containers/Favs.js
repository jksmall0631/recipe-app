import { connect } from 'react-redux';
import Favs from '../components/Favs';

const mapStateToProps = (state) => {
  return {
    favs: state.storeFavs,
  }
}

export default connect(mapStateToProps, null)(Favs)
