import React, { Component } from 'react';



class TodoItem extends Component {

    deleteProject(id){
        //console.log("test");
        this.props.onDelete(id);
    }
    render() {
        //console.log(this.props);
        return (
            <li className="Todo">
                <strong>{this.props.todo.title}</strong>

            </li>
        );
    }
}

TodoItem.propTypes = {
    todo: React.PropTypes.object,

}

export default TodoItem;
