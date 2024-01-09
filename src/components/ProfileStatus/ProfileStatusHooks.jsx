import React, {useState} from "react";

const ProfileStatus = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.userStatus);

    const activateEditMode = () => {
        setEditMode(true);
    };

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateUserStatus(status);
    };

    const onMessageTextChanged = (event) => {
        setStatus(event.target.value);
    }

    return (
        <div>
            {!props.userStatus && !editMode && (
                <button onClick={activateEditMode}>Add status</button>
            )}

            {!editMode && (
                <div>
          <span onDoubleClick={activateEditMode}>
            {props.userStatus}
          </span>
                </div>
            )}

            {editMode && (
                <div>
                    <input
                        autoFocus={true}
                        onBlur={deactivateEditMode}
                        onInput={onMessageTextChanged}
                        type="text"
                        defaultValue={props.userStatus}
                    />
                </div>
            )}
        </div>
    );
};

export default ProfileStatus;