import React, { useState } from 'react';
import './App.css';

import Form from './Form';
import TeamMemberList from './TeamMemberList';

function App() {
  const [team, setTeam] = useState([
    {name: 'Alex', email: 'alex@me.com', role: 'Front-End Dev'},
    {name: 'Will', email: 'will@me.com', role: 'Team Lead'}
  ]);

  const teamChange = newMember => {
    setTeam([...team, newMember])
  }

  return (
    <div className="App">
      <Form teamAdd={teamChange} />
      <h3>View your team members below</h3>
      <>
        {team.map((member, i) => (
          <TeamMemberList key={i} newMember={member} />
        ))}
      </>
    </div>
  );
}

export default App;
