import React from 'react';
import { Link } from 'react-router-dom'; 

function Landing() { //Página inicial Dummy
    return (
        <div>
            <h1>Bem vindo á nossa página de Landing Dummy</h1>
            <Link to="/auth">
                <button>Entrar</button>
            </Link>
        </div>
    );
}

export default Landing;