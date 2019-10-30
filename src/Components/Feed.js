import React from 'react'
import Popup from './Popup';

import '../Styles/Feed.css'
import '../Styles/Buttons.css'
import '../Styles/Create.css'
import '../Styles/Form.css'
import '../Styles/Utilities.css'

const Feed = () => {
    return (
        <main className="feed">
            <h2>Aqui va a ir el contenido principal</h2>
            <Popup trigger={(
                <div className="login_button button button_fill"><span>Popup!!</span></div>
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
        </main>
    )
}

export default Feed;