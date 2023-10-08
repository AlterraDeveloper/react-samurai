import DialogItems from "../DialogItems/DialogItems";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs
  };
};

let mapDispatchToProps = (dispatch) => {
  return {};
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(DialogItems);

export default DialogsContainer;