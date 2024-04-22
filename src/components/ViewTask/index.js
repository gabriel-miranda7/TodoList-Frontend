import React from 'react';

import { Main } from './styled';


function ViewTask({ title, description, iscomplete, onClose}) {

    //Colocar ícones e estilizar melhor essa parte
    return (
        <Main>
            <div className='background'>
                <div onClick={onClose} className='fecharIcon'>Fechar</div>
                <div>Título: {title}</div>
                <div>

                {description === '' ? '' 
                : 
                <>
                <p>Descrição: </p>
                <section className='description'>
                    <p>{description}</p>
                </section>
                </>
                }
                </div>
                <div>Está completo? : {iscomplete ? "Não" : "Sim"}</div>
            </div>
        </Main>
    );
}

export default ViewTask;
