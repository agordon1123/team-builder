import React, { useState } from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';

import Form from './components/Form';
import TeamMemberList from './components/TeamMemberList';

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
      <Link to='/'>Home</Link>{' '}
      <Link to='/add'>Add-Teammate</Link>
      <Route exact path='/'
             render={props => team.map((member, i) => (
              <TeamMemberList key={i} newMember={member} />))} />
      <Route path='/add'
             render={props => <Form {...props} teamAdd={teamChange} />} />
    </div>
  );
}

export default App;
