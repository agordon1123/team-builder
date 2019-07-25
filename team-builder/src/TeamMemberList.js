import React from 'react';

const TeamMemberList = ({newMember}) => {
    console.log('props', newMember)
    return (
        <div>
            <div className='divider' />
            <p>Name: {newMember.name}</p>
            <p>Email: {newMember.email}</p>
            <p>Role: {newMember.role}</p>
        </div>
    )
}

export default TeamMemberList;
