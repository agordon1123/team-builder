import React, { useState } from 'react';
import './App.css';
import teamArray from './data';

import Form from './Form';
import TeamMemberList from './TeamMemberList';

function App() {
  const [team, setTeam] = useState([]);

  const teamChange = newMember => {
    setTeam([...team, newMember])
  }

  return (
    <div className="App">
      <Form teamAdd={teamChange} />
      <h2>View your team members below</h2>
      <>
        {teamArray.map((member, i) => (
          <TeamMemberList key={i} props={member} />
        ))}
      </>
    </div>
  );
}

export default App;
