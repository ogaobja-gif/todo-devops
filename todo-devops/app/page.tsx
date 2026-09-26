"use client";

import { useState } from "react";

export default function Home() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<string[]>([
    "Finish assignment",
    "Study Next.js",
    "Setup Git repository",
  ]);

  function addTask() {
    if (task.trim() === "") return;

    setTasks([...tasks, task]);
    setTask("");
  }

  return (
    <main>
      <h1>TODO APPLICATION</h1>

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
            <input type="checkbox" />
            {item}
            <button>Delete</button>
          </li>
        ))}
      </ul>
    </main>
  );
}