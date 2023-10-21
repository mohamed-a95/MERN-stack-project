import { useEffect, useState } from "react";

//import workout details

import WorkoutDetails from "../components/WorkoutDetails";

//import form form to add workout
import WorkoutForm from "../components/WorkoutForm";

const Home = () => {
  const [workout, setWorkout] = useState([]);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/workouts");
      const data = await response.json();
      console.log(data);

      if (response.ok) {
        setWorkout(data);
      }
    };

    fetchWorkouts();
  }, []);

  return (
    <div className="home">
      <div className="workouts">
        {workout.map((item) => (
          <div key={item._id}>
            <WorkoutDetails workout={item} />
          </div>
        ))}
      </div>
      <div>
        <WorkoutForm />
      </div>
    </div>
  );
};

export default Home;
