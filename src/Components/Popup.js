import React, { useRef, useState, useEffect } from 'react';
import "../Styles/Popup.css"


const Popup = (props) => {
    const windowEl = useRef(null);
    const [isOpen, setIsOpen] = useState(false);


    const open = useRef(e => {
        setIsOpen(true);
        document.addEventListener('keydown', handleKeyDown.current);
        document.addEventListener('click', handleOutsideClick.current);
    })

    const close = useRef(e => {
        document.removeEventListener('click', handleOutsideClick.current);
        document.removeEventListener('keypress', handleKeyDown.current)
        setIsOpen(false);

    })

    const handleOutsideClick = useRef(e => {
        if (windowEl.current === null) return;
        if (!windowEl.current.contains(e.target)) {
            close.current();
        }
    })

    const handleKeyDown = useRef(e => {
        if (e.key === "Escape") {
            close.current();
        }
    })

    const handleTriggerClick = e => {
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
            <div className={"popup_trigger"} onClick={handleTriggerClick}>
                {props.trigger}
            </div>
            {isOpen ?
                <div >

                    <div className="popup_background" />
                    <div className="popup_content" ref={windowEl} >
                        <button className="popup_close-button" onClick={() => close.current("close?")} />
                        {props.children}
                    </div>
                </div> : null}
        </div>
    )
}

export default Popup;