"use client";

export default function Home() {
  return (
    <main>
      <h1>TODO APPLICATION</h1>

      <div>
        <input type="text" placeholder="Enter a task..." />
        <button>Add Task</button>
      </div>

      <ul>
        <li>
          <input type="checkbox" />
          Finish assignment
          <button>Delete</button>
        </li>

        <li>
          <input type="checkbox" />
          Study Next.js
          <button>Delete</button>
        </li>

        <li>
          <input type="checkbox" defaultChecked />
          Setup Git repository
          <button>Delete</button>
        </li>
      </ul>
    </main>
  );
}