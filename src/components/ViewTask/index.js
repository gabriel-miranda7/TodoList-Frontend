import React from 'react';

import { Main } from './styled';


function ViewTask({ title, description, iscomplete, onClose}) {

    //Colocar ícones e estilizar melhor essa parte
    return (
        <Main>
            <div className='background'>
                <div onClick={onClose} className='fecharIcon'>FecharX</div>
                <div>Título: {title}</div>
                {description && <div>Descrição: {description}</div>}
                {iscomplete != null && <div>Está completo? : {iscomplete ? "Não" : "Sim"}</div>}
            </div>
        </Main>
    );
}

export default ViewTask;
