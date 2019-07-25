import React from 'react';

const TeamMemberList = ({newMember}) => {
    console.log('props', newMember)
    return (
        <div>
            <div className='divider' />
            <h3>Name: {newMember.name}</h3>
            <h3>Email: {newMember.email}</h3>
            <h3>Role: {newMember.role}</h3>
        </div>
    )
}

export default TeamMemberList;
