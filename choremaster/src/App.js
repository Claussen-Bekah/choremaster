import "./App.css";
import AddChore from "./Actions/AddChore";
import AddMember from "./Actions/AddMember";
import CreateChoreChart from "./Actions/CreateChoreChart";
import React, { useState } from "react";

function App() {
  const [openChoreForm, setOpenChoreForm] = useState(false);
  const [openMemberForm, setOpenMemberForm] = useState(false);

  const handleOpenChoreForm = () => {
    setOpenChoreForm(true);
  };

  const handleOpenMemberForm = () => {
    setOpenMemberForm(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleOpenChoreForm}>Add Chores</button>
        <button onClick={handleOpenMemberForm}>Add Members</button>
        <button id="ChoresChart">Generate Chore Chart</button>
        {openChoreForm && <AddChore />}
        {openMemberForm && <AddMember />}
      </header>
    </div>
  );
}

export default App;
