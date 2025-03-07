import React, { useState, useEffect } from 'react';
import StopWatch from './StopWatch';
import Tasks from './Tasks';

function App() {
    const [isrunning, setisrunning] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [showCongrats, setShowCongrats] = useState(false);

    function addTask(taskName) {
        setTasks([...tasks, { name: taskName, completed: false }]);
        setShowCongrats(false);
    }

    function completeTask(index) {
        const updatedTasks = [...tasks];
        updatedTasks[index].completed = true;
        setTasks(updatedTasks);
    }

    function checkCompletion() {
        const allDone = tasks.length > 0 && tasks.every(task => task.completed);

        if (allDone && isrunning) {
            setShowCongrats(true);
        }
    }

    useEffect(() => {
        checkCompletion();
    }, [tasks, isrunning]);

    return (
        <>
            <div id="main">
                <div id="watchManager">
                    <StopWatch isrunning={isrunning} setisrunning={setisrunning} />
                </div>
                <div id="taskManager">
                    <Tasks tasks={tasks} addTask={addTask} completeTask={completeTask} />
                </div>
                {showCongrats && <h1> Congrats! You finished all tasks in time! </h1>}
            </div>
        </>
    );
}
export default App;