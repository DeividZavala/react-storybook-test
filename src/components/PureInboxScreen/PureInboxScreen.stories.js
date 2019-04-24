import React from 'react';
import { storiesOf } from '@storybook/react';
import { PureInboxScreen } from './PureInboxScreen';
import { action } from '@storybook/addon-actions';
import { Provider } from 'react-redux';
import { defaultTasks } from '../TaskList/TaskList.stories';

// Un mock super simple de un store de redux
const store = {
    getState: () => {
        return {
            tasks: defaultTasks,
        };
    },
    subscribe: () => 0,
    dispatch: action('dispatch'),
};

storiesOf('InboxScreen', module)
    .addDecorator(story => <Provider store={store}>{story()}</Provider>)
    .add('default', () => <PureInboxScreen />)
    .add('error', () => <PureInboxScreen error="Something" />);
