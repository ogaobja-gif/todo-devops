"use client";

import { useState } from "react";

type Task = {
  text: string;
  completed: boolean;
};

export default function Home() {
  const [task, setTask] = useState("");

  const [tasks, setTasks] = useState<Task[]>([
    { text: "Finish assignment", completed: false },
    { text: "Study Next.js", completed: false },
    { text: "Setup Git repository", completed: true },
  ]);

  // Add Task
  function addTask() {
    if (task.trim() === "") return;

    setTasks([
      ...tasks,
      {
        text: task,
        completed: false,
      },
    ]);

    setTask("");
  }

  // Complete Task
  function toggleTask(index: number) {
    const updatedTasks = [...tasks];

    updatedTasks[index].completed =
      !updatedTasks[index].completed;

    setTasks(updatedTasks);
  }

  // Delete Task
  function deleteTask(index: number) {
    const updatedTasks = tasks.filter(
      (_, taskIndex) => taskIndex !== index
    );

    setTasks(updatedTasks);
  }

  return (
    <main>
      <h1>TODO APPLICATION — Version 1.1 Development</h1>

      <div>
        <input
          type="text"
          placeholder="Enter a task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button onClick={addTask}>Add Task</button>
      </div>

      <ul>
        {tasks.map((item, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => toggleTask(index)}
            />

            <span
              style={{
                textDecoration: item.completed
                  ? "line-through"
                  : "none",
              }}
            >
              {item.text}
            </span>

            <button onClick={() => deleteTask(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}