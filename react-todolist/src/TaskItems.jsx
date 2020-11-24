import React, {Component} from 'react';

class TaskItems extends Component{
    render(){
        const {tasks, buttonFunction} = this.props;
        return(
            <div onClick={() => buttonFunction(tasks)}>
                <li>{tasks}</li>
            </div>
        )
    }
}

export default TaskItems;