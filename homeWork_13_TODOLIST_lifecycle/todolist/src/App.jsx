// ● მოახდინე წინა ლექციაზე შესრულებული
// todo-list აპლიკაციის ოპტიმიზაცია
// ● კერძოდ, გადაარენდერე მხოლოდ ის
// კომპონენტები, რომლის მნიშვნელობაც
// შეიცვალა
// ● მიმდინარე ვერსიაში ყოველ
// ცვლილებაზე რენდერდება ყველა
// კომპონენტი
import React, { Component } from 'react';
import DoneList from './components/DoneList';
import TaskAdder from './components/TaskAdder';
import TodoList from './components/TodoList';

class App extends Component {
  state = {
    inputValue: '',
    tasks: [],
    doneTasks: [],
  };

  addNewTask = (event) => {
    const value = event.target.value;
    this.setState({ inputValue: value });
  };

  submitTask = (e) => {
    e.preventDefault();
    const task = {
      id: this.state.tasks.length + 1,
      task: this.state.inputValue,
    };
    this.setState((prevState) => ({
      tasks: [...prevState.tasks, task],
      inputValue: '',
    }));
  };

  removeTask = (id) => {
    this.setState((prevState) => ({
      doneTasks: prevState.doneTasks.filter((task) => task.id !== id),
    }));
  };

  addToDone = (id) => {
    const targetTask = this.state.tasks.find((task) => task.id === id);
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((task) => task.id !== id),
      doneTasks: [...prevState.doneTasks, targetTask],
    }));
  };

  backToTodoList = (id) => {
    const targetTask = this.state.doneTasks.find((task) => task.id === id);
    this.setState((prevState) => ({
      tasks: [...prevState.tasks, targetTask],
      doneTasks: prevState.doneTasks.filter((task) => task.id !== id),
    }));
  };

  render() {
    return (
      <div className="App">
        <TaskAdder
          mainState={this.state}
          addNewTask={this.addNewTask}
          submitTask={this.submitTask}
        />
        <TodoList mainState={this.state} addToDone={this.addToDone} />
        <DoneList
          mainState={this.state}
          removeTask={this.removeTask}
          backToTodoList={this.backToTodoList}
        />
      </div>
    );
  }
}

export default App;