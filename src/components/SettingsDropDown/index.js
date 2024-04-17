import React from 'react';

import { Options } from './styled';

function SettingsDropDown() {
    return(
        <Options>
            <button>Fazer logout</button>
            <button>Alterar usuário</button>
            <button>Alterar senha</button>
        </Options>
    )
}

export default SettingsDropDown;