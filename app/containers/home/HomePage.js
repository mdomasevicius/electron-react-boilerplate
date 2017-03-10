import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Home from '../../components/item/Home';
import * as ItemActions from '../../actions/item-actions';

function mapStateToProps(state) {
  return {
    createEditModalVisible: state.items.createEditModalVisible,
    items: state.items.items
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ItemActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
