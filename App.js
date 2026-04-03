import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (!input) return;
    setTasks([...tasks, input]);
    setInput("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>🎓 Student Productivity Dashboard</h1>

      <h2>📝 Tasks</h2>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map((task, i) => (
          <li key={i}>{task}</li>
        ))}
      </ul>

      <h2>📒 Notes</h2>
      <p>Coming soon...</p>

      <h2>⏱️ Pomodoro Timer</h2>
      <p>25:00</p>
    </div>
  );
}

export default App;