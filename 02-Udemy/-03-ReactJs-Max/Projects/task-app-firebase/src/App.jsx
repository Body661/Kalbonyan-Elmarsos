import React, { useEffect, useState } from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import useHttps from "./Hooks/useHttps";

function App() {
  const [tasks, setTasks] = useState([]);

  const [isLoading, error, fetchTasks] = useHttps();

  useEffect(() => {
    const trasnformTask = (taskObj) => {
      const loadedTasks = [];

      for (const taskKey in taskObj) {
        loadedTasks.push({ id: taskKey, text: taskObj[taskKey].text });
      }
      setTasks(loadedTasks);
    };

    fetchTasks(
      {
        url: "https://react-http-36e58-default-rtdb.firebaseio.com/tasks.json",
      },
      trasnformTask
    );
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
