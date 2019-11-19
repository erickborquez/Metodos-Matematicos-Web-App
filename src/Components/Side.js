import React from 'react';

import CreateTeam from './CreateTeam';
import TeamCard from './TeamCard';

import '../Styles/Side.css'


import background1 from '../assets/background-1.jpg';
import background2 from '../assets/background-2.jpg';
import background3 from '../assets/background-3.jpg';
import background4 from '../assets/background-4.jpg';


const IMAGES = [
    { id: 1, src: background1, alt: "trash", title: "Recoleccion de basura", subtitle: "Siguiente tarea: 16/11/19" },
    { id: 2, src: background2, alt: "trash", title: "Recoleccion de basura", subtitle: "Siguiente tarea: 16/11/19" },
    { id: 3, src: background3, alt: "trash", title: "Recoleccion de basura", subtitle: "Siguiente tarea: 16/11/19" },
    { id: 4, src: background4, alt: "trash", title: "Recoleccion de basura", subtitle: "Siguiente tarea: 16/11/19" },
    
];


const Side = (props = {}) => {
    return (
        <section className="side">
            <div className="side_container">
                {IMAGES.map(img => <TeamCard key={img.id} src={img.src} alt={img.alt} title={img.title} subtitle={img.subtitle} />)}
                <CreateTeam className="side_create-team" />
            </div>
        </section>
    )
};

export default Side;