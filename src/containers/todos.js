import React, { Component } from "react";
import MockTaskList from "../mocks/todolist";
import Task from "../components/task";
export default class ToDos extends Component {
  constructor(props) {
    super();
    this.state = { toDoList: MockTaskList };
  }
  onTaskCheck = checkedTask => {
    this.setState({
      toDoList: this.state.toDoList.map(task => {
        if(checkedTask.id===task.id){
            return {...task,status:checkedTask.status}
        }
        return task;
      })
    });
  };
  render() {
    return this.state.toDoList.map(taskData => {
      return (<Task {...taskData} onCheck={this.onTaskCheck} />);
    });
  }
}
