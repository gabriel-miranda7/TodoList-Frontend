import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { IoIosSearch } from "react-icons/io";
import axios from '../../services/axios';
import { Box } from './styled';

function SearchBar({ todos }) {
  

    return(
        <Box>
            <div>
                <IoIosSearch className='search-icon' size={30} />
                <input placeholder='Pesquisar...'></input>
            </div>
        </Box>
    )
}


export default SearchBar;