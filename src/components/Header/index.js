import React from 'react';
// ícones
import { FaCog } from "react-icons/fa";
import { BsFillTrash3Fill } from "react-icons/bs";
import { LiaClipboardListSolid } from "react-icons/lia";
import { IoIosSearch } from "react-icons/io";

import { Main } from './styled';

function Header() {
    return (
        <> 
        <Main>
            <div className='title'>
                <p>My To-Do List</p>
            </div>
            {/*divs de ícones da navbar*/}
            <div className='actions'>
                <section className='cog'>
                    <FaCog className='cog-icon' size={30} />
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
        </Main>
        </>
    );
}

export default Header;