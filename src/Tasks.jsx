import React, { useState } from 'react';


function Tasks({ tasks, addTask, completeTask }) {
    const [taskName, setTaskName] = useState('');

    return (
        <div id="taskManager">
            <input
                type="text"
                placeholder="Enter Task"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
            />
            <button onClick={() => {
                if (taskName.trim().length > 0) {  // Prevent empty tasks
                    addTask(taskName);
                    setTaskName('');
                }
            }}>
                Add
            </button>

            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => completeTask(index)}
                        />
                        {task.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default Tasks;