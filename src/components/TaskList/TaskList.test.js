import React from 'react';
import ReactDOM from 'react-dom';
import PureTaskList from './TaskList';
import {withPinnedTasks} from './TaskList.stories';
import {Provider} from "react-redux";
import {action} from "@storybook/addon-actions";

const store = {
    getState: () => {
        return {
            tasks: withPinnedTasks,
        };
    },
    subscribe: () => 0,
    dispatch: action('dispatch'),
};

it('renders pinned tasks at the start of the list', () => {
    const div = document.createElement('div');
    const events = { onPinTask: jest.fn(), onArchiveTask: jest.fn() };
    ReactDOM.render(<Provider store={store}><PureTaskList {...events} /></Provider>, div);

    // Esperamos que la tarea titulada "Tarea 6 (anclada)" se ejecute primero, no al final.
    const lastTaskInput = div.querySelector('.list-item:nth-child(1) input[value="Task 6 (pinned)"]');
    expect(lastTaskInput).not.toBe(null);

    ReactDOM.unmountComponentAtNode(div);
});
