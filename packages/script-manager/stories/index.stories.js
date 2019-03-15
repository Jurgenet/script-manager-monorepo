import { storiesOf } from '@storybook/react';
import React from 'react';
import ScriptManager from '../dist/script-manager.es';

storiesOf('ScriptManager', module).add('Component with title', () => <ScriptManager title="Hello World!" />);
