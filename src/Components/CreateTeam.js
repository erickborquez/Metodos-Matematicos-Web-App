import React,{useState} from "react";
import Popup from './Popup';

import '../Styles/Buttons.css'
import '../Styles/Create.css'
import '../Styles/Form.css'
import '../Styles/Utilities.css'

const CreateTeam = ({ className }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Popup className={className} isOpen={isOpen} setIsOpen={setIsOpen}
            trigger={(
                <div className="button_dotted button_team">
                    <div className="button_dotted_plus" />
                    <span className="button_dotted_text">Crear nuevo proyecto</span>
                </div>
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