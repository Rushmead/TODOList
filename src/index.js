import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import Store from './store';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

const StoreInstance = Store();
//Subscribe to any store changes and then add them to localStorage for cross session storing.
StoreInstance.subscribe(() => {
    localStorage.setItem('todoList', JSON.stringify(StoreInstance.getState()));
});

ReactDOM.render(<Provider store={StoreInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
