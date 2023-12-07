import s from "./DialogItems.module.css";
import DialogItem from '../DialogItem/DialogItem';
import { Navigate } from "react-router-dom";


const DialogItems = (props) => {

	if(!props.isAuth) 
	 return <Navigate to="/login" />

	const dialogsElements = props.dialogs.map((d) => <DialogItem dialogData={d} key={d.id} />);

	return <div className={s.dialogsItems}>{dialogsElements}</div>;
  };

export default DialogItems;