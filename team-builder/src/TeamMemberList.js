import React from 'react';
import teamArray from './data';

const TeamMemberList = () => {
    return (
        <div>
            <h1>View your team members below</h1>
            <p className='teamList'>{teamArray.map(member => {
                return (
                    member.name + ' ' + member.email + ' ' + member.role + ', '
                )
            })}</p>
        </div>
    )
}

export default TeamMemberList;