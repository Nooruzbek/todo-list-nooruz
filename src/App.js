import React from "react";
import Task from "./components/Task";
import TaskInput from "./components/TaskInput";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      tasks: [
        { id: 0, title: 'create todo-react-app-nooruz', done: true, important: true},
        { id: 1, title: 'develop', done: true, important: false},
        { id: 2, title: 'test', done: false, important: true}
      ]
    }
  }

  doneTask = id => {
    const index = this.state.tasks.map(task => task.id).indexOf(id);
    this.setState(state =>{
      let {tasks} = state;
      tasks[index].done = true;
      return tasks;
    })
  }

  deleteTask = id => {
    const index = this.state.tasks.map(task => task.id).indexOf(id);
    this.setState(state =>{
      let {tasks} = state;
      delete tasks[index];
      return tasks;
    })
  }

  changeImportant = (id, isImportant) => {
    const index = this.state.tasks.map(task => task.id).indexOf(id);
    this.setState(state =>{
      let {tasks} = state;
      tasks[index].important = isImportant;
      return tasks;
    })
  }

  addTask = task => {
    let tasks = this.state.tasks.concat({
        id: this.state.tasks.length !== 0 ? this.state.tasks.length : 0,
        title: task,
        done: false,
        important: false
      });

      this.setState({
        tasks: tasks
      })

      return tasks;
  };

    render() {
      const { tasks } = this.state;
      const activeTasks = tasks.filter(task => !task.done);
      const doneTasks = tasks.filter(task => task.done);
      return(
          <div className="app">
            <h1 className="top">Active tasks: {this.state.tasks.filter(task => !task.done).length}</h1>
            {[...activeTasks, ...doneTasks].map(task => (
                <Task
                    doneTask={()=> this.doneTask(task.id)}
                    deleteTask={()=> this.deleteTask(task.id)}
                    makeImportant={()=> this.changeImportant(task.id, true)}
                    makeNotImportant ={()=> this.changeImportant(task.id, false)}
                      task={task} key={task.id}>
                </Task>
            ))}
            <TaskInput addTask={this.addTask}></TaskInput>
          </div>
      )
    }

}
export default App;
