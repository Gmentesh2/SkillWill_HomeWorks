import React, { PureComponent } from "react";

class DoneList extends PureComponent {
  render() {
    const { mainState, removeTask, backToTodoList } = this.props;

    return (
      <div>
        <h4>Tasks Already Done</h4>
        {mainState.doneTasks.map((task) => (
          <div key={task.id}>
            <p>{task.task}</p>
            <button onClick={() => removeTask(task.id)}>Remove Task</button>
            <button onClick={() => backToTodoList(task.id)}>Return to TodoList</button>
          </div>
        ))}
      </div>
    );
  }
}

export default DoneList;