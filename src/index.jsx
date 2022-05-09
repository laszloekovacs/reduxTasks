import React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './components/App';
import {createStore} from 'redux';
import tasksReducer from './reducers';
import './style.css';
import {Provider} from 'react-redux';

const store = createStore(tasksReducer);

const root = ReactDOM.createRoot(document.getElementById('App'));
root.render(
	<Provider store={store}>
		<App></App>
	</Provider>
);
