import React from 'react';

import TaskGroup from '../TaskGroup';
import { Main } from './styled';

function TaskGroupsBox() {
    return (
        // substituir futuramente isso por uma repetição dos TaskGroup com limite de 5
        // de acordo com os grupos de task recebidas do GET dos dados do usuário
        <Main>
            <TaskGroup />
            <TaskGroup />
            <TaskGroup />
            <TaskGroup />
            <TaskGroup />
        </Main>
    );
}

export default TaskGroupsBox;