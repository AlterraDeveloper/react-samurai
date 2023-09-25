import s from "./DialogItems.module.css";
import DialogItem from '../DialogItem/DialogItem';


const DialogItems = (props) => {

	const dialogsElements = props.dialogs.map((d) => <DialogItem dialogData={d} key={d.id} />);

	return <div className={s.dialogsItems}>{dialogsElements}</div>;
  };

export default DialogItems;