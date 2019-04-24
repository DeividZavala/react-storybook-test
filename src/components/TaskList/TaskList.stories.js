import React from 'react';
import { storiesOf } from '@storybook/react';

import TaskList from './TaskList';
import { createTask, actions } from '../Task/Task.stories';

export const defaultTasks = [
    createTask({ state: 'TASK_INBOX' }),
    createTask({ state: 'TASK_INBOX' }),
    createTask({ state: 'TASK_INBOX' }),
    createTask({ state: 'TASK_INBOX' }),
    createTask({ state: 'TASK_INBOX' }),
    createTask({ state: 'TASK_INBOX' }),
];

export const withPinnedTasks = [
    createTask({ title: 'Task 1', state: 'TASK_INBOX' }),
    createTask({ title: 'Task 2', state: 'TASK_INBOX' }),
    createTask({ title: 'Task 3', state: 'TASK_INBOX' }),
    createTask({ title: 'Task 4', state: 'TASK_INBOX' }),
    createTask({ title: 'Task 5', state: 'TASK_INBOX' }),
    createTask({ title: 'Task 6 (pinned)', state: 'TASK_PINNED' }),
];

storiesOf('TaskList', module)
    .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
    .add('default', () => <TaskList tasks={defaultTasks} {...actions} />)
    .add('withPinnedTasks', () => <TaskList tasks={withPinnedTasks} {...actions} />)
    .add('loading', () => <TaskList loading tasks={[]} {...actions} />)
    .add('empty', () => <TaskList tasks={[]} {...actions} />);
