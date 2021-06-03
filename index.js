/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import doggy from './src/screen/doggy';

AppRegistry.registerComponent(appName, () => doggy);
