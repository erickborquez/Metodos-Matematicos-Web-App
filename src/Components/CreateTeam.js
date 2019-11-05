import React from "react";
import Popup from './Popup';

import '../Styles/Buttons.css'
import '../Styles/Create.css'
import '../Styles/Form.css'
import '../Styles/Utilities.css'

const CreateTeam = ({ className }) => {
    return (
        <Popup className={className} trigger={(
            <div className="login_button button button_fill button_team"><span>Popup!!</span></div>
        )}>
            <div className="form_container from_create">
                <form className="form">
                    <span className="form_title form_title-main">Crear un nuevo equipo</span>
                    <div className="form_separator border-bottom">
                        <label className="form_title form_title-secondary ">Nombre de la organizacion</label>
                        <input type="text" className="form_input-large" />
                    </div>
                    <div className="form_separator border-bottom">
                        <label className="form_title form_title-secondary ">Nombre de la organizacion</label>
                        <input type="text" className="form_input-large" />
                    </div>
                    <div className="form_separator border-bottom">
                        <label className="form_title form_title-secondary ">Nombre de la organizacion</label>
                        <input type="text" className="form_input-large" />
                    </div>
                    <div className="form_separator">
                        <label className="form_title form_title-secondary ">Nombre de la organizacion</label>
                        <input type="text" className="form_input-large" />
                    </div>
                    <div className="form_button button button_fill"><span>Crear</span></div>

                </form>
            </div>
        </Popup>
    )
}

export default CreateTeam;