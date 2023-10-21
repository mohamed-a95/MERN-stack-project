import { useState } from "react";

const WorkoutForm = () => {
  const [title, setTitle] = useState("");
  const [reps, setReps] = useState("");
  const [load, setLoad] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const workout = { title, reps, load };
    const response = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);

    if (!response.ok) {
      setError(data.error);
    }

    if (response.ok) {
      setError(null);
      setTitle("");
      setLoad("");
      setReps("");
      console.log("new workout added", data);
    }
  };

  return (
    <div>
      <form className="create" onSubmit={handleSubmit}>
        <h3>Add a new workout</h3>
        <label>Excercise title</label>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />

        <label>Number of reps</label>
        <input
          type="number"
          onChange={(e) => setReps(e.target.value)}
          value={reps}
        />

        <label>Load in kg</label>
        <input
          type="number"
          onChange={(e) => setLoad(e.target.value)}
          value={load}
        />

        <button>Add workout</button>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
};

export default WorkoutForm;
