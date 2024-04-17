import React, { useState } from 'react';
import { FaCog } from "react-icons/fa";
import { BsFillTrash3Fill } from "react-icons/bs";
import { LiaClipboardListSolid } from "react-icons/lia";
import { IoIosSearch } from "react-icons/io";

import { Main } from './styled';
import Popup from '../SettingsPopup';
import SettingsDropDown from '../SettingsDropDown';

function Header() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isOver, setOver] = useState(false);

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    const handleHover = () => {
        const over = isOver;
        setOver(!over);
    }

    return (
        <Main>
            <div className='title'>
                <p>My To-Do List</p>
            </div>
            {/*divs de ícones da navbar*/}
            <div className='actions'>
                <div className='cog-box' onMouseOver={handleHover}>
                    <section className='cog' onClick={togglePopup}>
                        <FaCog className='cog-icon' size={30} />
                    </section>
                    {isOver && <SettingsDropDown />}
                </div>
                <div className='trash-box'>
                    <section className='trash'>
                        <BsFillTrash3Fill className='trash-icon' size={30} />
                    </section>
                </div>
                <div className='clip-box'>
                    <section className='clipboard'>
                        <LiaClipboardListSolid className='clipboard-icon' size={30} />
                    </section>
                </div>
                <section className='search'>
                    <IoIosSearch className='search-icon' size={30} />
                </section>
            </div>
            {isPopupOpen && <Popup onClose={togglePopup} />}
        </Main>
    );
}

export default Header;
