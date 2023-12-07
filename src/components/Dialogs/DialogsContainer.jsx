import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import DialogItems from "../DialogItems/DialogItems";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs
  };
};

const DialogsContainer = connect(mapStateToProps)(withAuthRedirect(DialogItems));

export default DialogsContainer;