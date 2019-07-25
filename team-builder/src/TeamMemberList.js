import React from 'react';

const TeamMemberList = ({props}) => {
    console.log('props', props)
    return (
        <div>
            <div class='divider' />
            <h3>Name: {props.name}</h3>
            <h3>Email: {props.email}</h3>
            <h3>Role: {props.role}</h3>
        </div>
    )
}

export default TeamMemberList;
