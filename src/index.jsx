import React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './components/App';
import {createStore} from 'redux';
import tasksReducer from './reducers';
import './style.css';
import {Provider} from 'react-redux';
import {devToolsEnhancer} from 'redux-devtools-extension';

const store = createStore(tasksReducer, devToolsEnhancer());

const root = ReactDOM.createRoot(document.getElementById('App'));
root.render(
	<Provider store={store}>
		<App></App>
	</Provider>
);
