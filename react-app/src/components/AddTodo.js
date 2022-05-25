import React, { Component } from 'react';

class AddTodo extends Component {
    state = {
        defaultValue: "",
        value: this.props.addTodoValue
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value
        });
    }

    clearInput = () => {
        document.getElementById("todoValue").value = "";
        this.setState({value:""});
    }

    addTodo = () => {
        this.props.fooAddTodo(this.state.value);
        this.clearInput();
    }

    render() {
        return (
            <div className="addition-sector">
                <input type="text" className="textbox" id="todoValue" placeholder="Start Typing Here" onChange={this.handleChange} />
                <div className="input-group-append">
                    <button onClick={this.addTodo} className="todo-button" type="button" id="button-addon2">Add New Item</button>
                </div>
            </div>
        );
    }
}

export default AddTodo;