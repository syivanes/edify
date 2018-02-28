import { connect } from 'react-redux';
import ClassnotesFoldersList from '../components/ClassnotesFoldersList';

import {
  actionAddFolder,
  actionAddClassnote
} from '../actions/classnotesFolders';

const mapStateToProps = (state) => {
  return {
    classnotesFolders: state
  }
}

const mapDispatchToProps = (dispatch) => ({
  add: payload => dispatch(actionAddFolder(payload)),
  addClassnote: payload => dispatch(actionAddClassnote(payload))
});

const ClassnotesFoldersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ClassnotesFoldersList);

export default ClassnotesFoldersContainer;