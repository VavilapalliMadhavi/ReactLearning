import Profile from "./components/profile";
import Event from "./components/Event";
import StudentCard from "./components/StudentCard";


function App(){
  return (

    <div>
      <h1>React Props</h1>
      <Profile name="Madhavi" role="Frontend Developer" />
      <Profile name="Prudhvi" role="Grahpic Designer"/>
      <Event/>
      <StudentCard name="Madhavi" course="ECE"/>
        <StudentCard name="Madhavi" course="ECE"/>
    </div>

  )
}

export default App;