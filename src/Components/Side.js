import React from 'react';
import '../Styles/Side.css'

import CreateTeam from './CreateTeam';

const Side = (props = {}) => {
    return (
        <section className="side">
            {props.teams}
            <CreateTeam className="side_create-team" />
            <CreateTeam className="side_create-team" />
            <CreateTeam className="side_create-team" />
            <CreateTeam className="side_create-team" />

        </section>
    )
};

export default Side;