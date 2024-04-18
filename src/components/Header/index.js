import React, { useState, useEffect, useRef } from 'react';
import { FaCog } from "react-icons/fa";
import { BsFillTrash3Fill } from "react-icons/bs";
import { LiaClipboardListSolid } from "react-icons/lia";
import { IoIosSearch } from "react-icons/io";
import { Main } from './styled';
import Popup from '../SettingsPopup';

function Header() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [popupStyle, setPopupStyle] = useState({ opacity: 0, transition: 'opacity 0.5s' });
    const cogRef = useRef(null); //Pega a referência da engrenagem
    useEffect(() => {
        if (isPopupOpen) {
            setPopupStyle({ opacity: 1, transition: 'opacity 0.4s' });
        } else {
            setPopupStyle({ opacity: 0});
        }
    }, [isPopupOpen]);

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    return (
        <Main>
            <div className='title'>
                <p>My To-Do List</p>
            </div>
            {/*divs de ícones da navbar*/}
            <div className='actions'>
                <section ref={cogRef} className='cog' onClick={togglePopup}>
                    <FaCog isOpen={isPopupOpen} className='cog-icon' size={30} />
                </section>
                <section className='trash'>
                    <BsFillTrash3Fill className='trash-icon' size={30} />
                </section>
                <section className='clipboard'>
                    <LiaClipboardListSolid className='clipboard-icon' size={30} />
                </section>
                <section className='search'>
                    <IoIosSearch className='search-icon' size={30} />
                </section>
            </div>
            {isPopupOpen && <Popup onClose={togglePopup} style={popupStyle} iconRef={cogRef} />}
        </Main>
    );
}

export default Header;
