import React, { Component } from "react";

class TaskAdder extends Component {
  render() {
    const { mainState, addNewTask, submitTask } = this.props;
    return (
      <div>
        <form onSubmit={submitTask}>
          <input
            type="text"
            placeholder="Add new task"
            value={mainState.inputValue}
            onChange={addNewTask}
          />
          <button type="submit"> Add to list </button>
        </form>
      </div>
    );
  }
}

export default TaskAdder;