import './App.css';
import GoalList from './components/GoalList/GoalList';
import NewGoal from './components/NewGoal/NewGoal';

const App = () => {
  const courseGoals = [
    {id: 'cg1', text: 'Clear A2 German Exam'},
    {id: 'cg2', text: 'Start Learning for B1 German Exam'},
    {id: 'cg3', text: 'Land a job'},
  ]

  return (
    <div className = "course-goals">
      <h2>Germany Goals</h2>
      <NewGoal />
      <GoalList goals = {courseGoals}/>
    </div>
  );
}

export default App;
