import React from 'react';

class Todo extends React.Component {

    render = () => {
        return (
            <div>
                <input type="text" placeholder={"Add Task"}/>
            </div>
        )
    }
}

export default Todo;