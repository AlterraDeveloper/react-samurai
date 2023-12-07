import DialogItems from "../DialogItems/DialogItems";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    isAuth: state.auth.isAuth
  };
};

let mapDispatchToProps = (dispatch) => {
  return {};
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(DialogItems);

export default DialogsContainer;