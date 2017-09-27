import React, { Component } from 'react';
import './App.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as taskActions from '../../actions/tasks';
import uuidv1 from 'uuid/v1';
import Task from '../Task/Task';
class App extends Component {

  constructor(){
    super();
    this.state ={newTask: "",filter: 'all'};
  }

  //The method which changes the task to whether its been done or not. Using the redux actions to do so.
  handleTaskChange(task) {
    task.done = !task.done;
    this.props.actions.markAs(task);
  }
  
  //This is just so that we dont have a button to click to add a new item.
  handleKeyPress(event) {
    if (event.key === "Enter") {
      this.props.actions.addTask({
        title: this.state.newTask,
        done: false,
        id: uuidv1()
      });
      this.setState({
        newTask: ''
      });
    }
  }

  //This is what happens when the textbox value changes, meaning that its constantly updated
  handleTextBoxChange(event) {
    this.setState({
      newTask: event.target.value
    });
  }
  
  //Called by the Task component to delete a certain task from the redux.
  handleDelete(task) {
    this.props.actions.deleteTask(task);
  }

  //Changes the state dependant on the select's value, used for the filter function.
  handleSelect(event) {
    this.setState({
      filter: event.target.value.toLowerCase()
    });
  }

  clearAll(){
    this.props.actions.clear();
  }

  render() {
    //Make a copy of the tasks
    var tasks = this.props.tasks;
    //Check if we should show all the items
    if(this.state.filter !== 'all'){
      //Should we show the done ones or the non-done ones?
      if(this.state.filter === 'done'){
        //Filter out the baddies!
        tasks = tasks.filter((task) => task.done === true);
      }else{
        tasks = tasks.filter((task) => task.done === false);
      }
    }
    //The actual task components being added to an array
    var contents = tasks.map((task) => {
      return (<Task task={task} key={task.id} action={this.handleTaskChange.bind(this, task)} delete={this.handleDelete.bind(this, task)}/>)
    });
    return (
      <div className="container">
        <h1 className="title">TODO List</h1>
        <div className="columns">
          <h2 className="column is-4">Add new task</h2>
          <label  className="column is-1">Filter</label>
        </div>
        <div className="field is-grouped">
          <input className="input column is-4" type="text" onKeyPress={this.handleKeyPress.bind(this)} onChange={this.handleTextBoxChange.bind(this)} value={this.state.newTask}/>
          <div className="select  is-2">
            <select onChange={this.handleSelect.bind(this)}>
              <option>All</option>
              <option>Done</option>
              <option>Not Done</option>
            </select>
          </div>
          <a className="button is-danger" onClick={this.clearAll.bind(this)}>
            <span className="icon is-small">
              <i className="fa fa-trash"></i>
            </span>
            <span>Clear All</span>
          </a>
        </div>
        <aside className="menu">
          <ul className="menu-list">
            {contents}
          </ul>
        </aside>
      </div>
    );
  }
}
//Bind the state of the redux to the props
function mapStateToProps(state, props) {
  return {
      tasks: state.tasks,
  };
}
//Map the actions to the props
function mapDispatchToProps(dispatch) {
  return {
      actions: bindActionCreators(taskActions, dispatch)
  }
}
//Connect to the redux
export default connect(mapStateToProps, mapDispatchToProps)(App);