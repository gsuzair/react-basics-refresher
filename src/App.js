import React, {useState} from 'react';
import './App.css';
import GoalList from './components/GoalList/GoalList';
import NewGoal from './components/NewGoal/NewGoal';

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    {id: 'cg1', text: 'Ich heisse Uzair'},
    {id: 'cg2', text: 'Ich wohne in Deutschland geradeaus'},
    {id: 'cg3', text: 'Ich habe zwei Hunden gekauft'},
  ])

  const addNewGoalHandler = newGoal => {
    // setCourseGoals(courseGoals.concat(newGoal))
    setCourseGoals((prevCourseGoals) => {
      return prevCourseGoals.concat(newGoal)
    })
  }

  return (
    <div className = "course-goals">
      <h2>Demoliste</h2>
      <NewGoal onAddGoal = {addNewGoalHandler}/>
      <GoalList goals = {courseGoals}/>
    </div>
  );
}

export default App;
