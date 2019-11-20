import React, { useState, useEffect, useRef, useContext } from 'react'

import { UserContext } from '../../Providers/UserProvider';

import AddDescription from './AddDescription'
import AddSubtitle from './AddSubtitle'
import AddTodo from './AddTodo'

import '../../Styles/CreatePost/AddElement.css'
import '../../Styles/Buttons.css'

import { publishPost } from '../../firebase'
const configuration = {
    MAXIMUN_CHARACTERS: 40
}

const elements =
    [
        {
            type: "description",
            name: "Parrafo",
            component: AddDescription
        },
        {
            type: "title",
            name: "Titulo",
            component: AddSubtitle
        },
        {
            type: "todo",
            name: "Por hacer",
            component: AddTodo
        }, {
            type: "image",
            name: "Imagen",
            component: AddDescription
        }, {
            type: "image",
            name: "Imagen",
            component: AddDescription
        }

    ]

const AddElement = ({closePopup}) => {
    const [title, setTitle] = useState("Añadir titulo");
    const [selectingSection, setSelectingSection] = useState(false);
    const [selected, setSelected] = useState(false);
    const [grow, setGrow] = useState(false);
    const [elementsComponent, setElementsComponent] = useState([]);
    const elementsData = useRef({});

    const [submiting, setSubmiting] = useState(false);

    const [hasElements, setHasElements] = useState(false);

    const user = useContext(UserContext);


    const handleSubmit = async () => {
        if (submiting) return;
        const elements = [];
        setSubmiting(true);
        for (const element in elementsData.current) {
            elements.push(elementsData.current[element]);
        }
        await publishPost(user, { content: [{ type: 'title', value: title }, ...elements] });
        closePopup();
    }

    const handleNewElement = (event, element) => {
        const key = `${element.type}-${Date.now()}`;

        const onSave = (data) => {
            elementsData.current[key] = { key, ...data };
            if (!hasElements) setHasElements(true);
        }
        setElementsComponent([...elementsComponent,
        <element.component key={key} onSave={onSave} configuration={configuration} />
        ])
        setSelected(true);
    }

    const handleButtonClick = () => {
        if (!selectingSection) {
            setSelectingSection(true);
            setSelected(false);
        }
    }

    useEffect(() => {
        if (selectingSection) {
            setGrow(true);
        }
    }, [selectingSection])

    useEffect(() => {
        if (selected) {
            setGrow(false);
            setSelectingSection(false);
        }
    }, [selected]);

    return (
        <div className="add-element">
            <textarea className="add-element_title" value={title} onChange={e => setTitle(e.target.value)} maxLength={configuration.MAXIMUN_CHARACTERS} />
            {elementsComponent}
            {selectingSection ? (
                <div className={`add-element_select-section ${grow ? 'add-element_select-section_grow' : ''}`}>
                    {elements.map((e, i) => {

                        return (
                            <div key={`${e.name}-${i}`}
                                className="button button_fill add-element_select-section_option"
                                onClick={(event) => handleNewElement(event, e)}>
                                <span className="button_content">{e.name}</span>
                            </div>
                        )
                    }
                    )}

                </div>

            ) : null}
            <div className={`add-element_buttons-container ${hasElements ? "add-elements_add-element_buttons-container--grid" : ""}`}>
                <div className="button_dotted add-element_button" onClick={handleButtonClick}>
                    <div className="button_dotted_plus" />
                    <span className="button_dotted_text">Agregar una seccion</span>
                </div>
                {hasElements ? (
                    <div className="button button_fill add-element_publish" onClick={handleSubmit}>
                        <span>Publicar</span>
                    </div>) : null}
            </div>

        </div>
    )
}
export default AddElement;
