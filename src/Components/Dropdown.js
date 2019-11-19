import React, { useState, useRef, useEffect } from 'react';



const Dropdown = (props) => {

    const menuEl = useRef();
    const [showMenu, setShowMenu] = useState(false);

    const open = useRef(e => {
        document.addEventListener('click', close.current);
        setShowMenu(true);
    })

    const close = useRef(e => {
       
        if (menuEl.current === null) return;
        if (!menuEl.current.contains(e.target)) {
            document.removeEventListener('click', close.current);
            setShowMenu(false);
        }
    })
    const handleClick = e => {
        if (!showMenu) open.current(e);
    }

    useEffect(() => {
        const closeFunc = close.current;
        return () => {
            document.removeEventListener('click', closeFunc);
        }
    }, []);

    return (
        <div className={props.className}>
            <div onClick={handleClick}>
                {props.triggerer}
            </div>
            {showMenu ? (<div ref={menuEl} className={props.containerClassName}>{props.children}</div>) : null}
        </div>
    )
}

export default Dropdown;