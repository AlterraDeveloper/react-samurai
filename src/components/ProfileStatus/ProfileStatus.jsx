import React from "react";

export default class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.userStatus,
  };

  activateEditMode = () => {
    this.setState({
      editMode: true,
    });
  };

  deactivateEditMode = () => {
    this.setState({
      editMode: false,
    });
    this.props.updateUserStatus(this.state.status);
  };

  onMessageTextChanged = (event) => {
    this.setState({
      status: event.target.value,
    });
  };

  render() {
    return (
      <div>
        {!this.props.userStatus && !this.state.editMode && (
          <button onClick={this.activateEditMode}>Add status</button>
        )}

        {!this.state.editMode && (
          <div>
            <span onDoubleClick={this.activateEditMode}>
              {this.props.userStatus}
            </span>
          </div>
        )}

        {this.state.editMode && (
          <div>
            <input
              autoFocus={true}
              onBlur={this.deactivateEditMode}
              onInput={this.onMessageTextChanged}
              type="text"
              defaultValue={this.props.userStatus}
            />
          </div>
        )}
      </div>
    );
  }
}
