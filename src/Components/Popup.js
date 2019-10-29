import React, { useRef, useState, useEffect } from 'react';
import "../Styles/Popup.css"



const Popup = (props) => {
    const windowEl = useRef(null);
    const [isOpen, setIsOpen] = useState(false);

    const open = useRef(e => {
        setIsOpen(true);
        document.addEventListener('click', close.current);
    })

    const close = useRef(e => {
        console.log(e);
        if (windowEl.current === null) return;
        if (!windowEl.current.contains(e.target)) {
            document.removeEventListener('click', close.current);
            setIsOpen(false);
        }
    })
    const handleClick = e => {
        console.log("cliiick");
        if (!isOpen) open.current(e);
    }

    useEffect(() => {
        const closeFunc = close.current;
        return () => {
            document.removeEventListener('click', closeFunc);
        }
    }, []);

    return (
        <div className={(props.className || "") + ' popup'}>
            <div className={"popup_trigger"} onClick={handleClick}>
                {props.trigger}
            </div>
            {isOpen ? <div className="popup_content" ref={windowEl} >{props.children}</div> : null}
        </div>
    )
}

export default Popup;