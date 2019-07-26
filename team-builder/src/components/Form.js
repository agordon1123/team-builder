import React, { useState } from 'react';

const Form = (props) => {
    const [teamMember, setTeamMember] = useState({
        name: '',
        email: '',
        role: ''
      })

    function handleChange(event) {
        const updatedTeamMember = { ...teamMember, [event.target.name]: event.target.value };
        console.log(
            'handleChange',
            event.target.name,
            event.target.value,
            updatedTeamMember
        );
        setTeamMember(updatedTeamMember);
    }
    
    function handleSubmit(event) {
        event.preventDefault();
        props.teamAdd(teamMember);
    }

    return (
        <div className='form'>
            <h1>Please fill out the form below</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name: 
                    <input 
                        type='text'
                        className='nameInput'
                        name='name'
                        placeholder='Enter your name'
                        value={teamMember.name}
                        onChange={event => handleChange(event)}
                    />
                </label>
                <br />
                <br />
                <label>
                    Email:
                    <input 
                        type='email'
                        className='emailInput'
                        name='email'
                        placeholder='example@me.com'
                        value={teamMember.email}
                        onChange={event => handleChange(event)}
                    />
                </label>
                <br />
                <br />
                <label>
                    Email:
                    <input 
                        type='text'
                        className='nameInput'
                        name='role'
                        placeholder='What is your role?'
                        value={teamMember.role}
                        onChange={event => handleChange(event)}
                    />
                </label>
                <br />
                <br />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Form;