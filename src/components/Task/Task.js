import React, { Component } from 'react';
import './Task.css';

class Task extends Component {

  render() {
    //Main render function for our Task Component
    return (
      //Make each one a list element, makes displaying a little easier. Also make sure we can have multiple columns in our TODO
        <li key={this.props.task.id} className="columns task-item">
          {/* This is a column which contains columns, INCEPTION! Actually, this makes sure everything is in line with each other */}
          <div className="column columns field is-grouped">
            {/* This is our first button, allows the user to change whether or not the task is done. Using the is-success and is-danger classes to help display which is which.*/}
            <a className={this.props.task.done ? 'column is-1 button is-success button-height' : 'column is-1 button is-danger button-height'} onClick={this.props.action}>
              {/* This is where we decide what to show in the button, a cross or a tick?*/}
              {this.props.task.done ? (<span className="icon is-small"><i className="fa fa-check"></i></span>) : (<span className="icon is-small"><i className="fa fa-times"></i></span>)}
              </a>
              {/* Displaying the actual task title. using the done value from the task to display whether or not it is done*/}
              <p className={this.props.task.done ? 'column is-10 task-done' : 'column is-10'}>
                {this.props.task.title}
              </p>
              {/* Finally the delete button, remove unwanted TODO items from your list! */}
              <a className="column is-1 button is-danger button-height" onClick={this.props.delete}><i className="fa fa-trash"></i></a>
          </div>
        </li>
    );
  }
}

export default Task;