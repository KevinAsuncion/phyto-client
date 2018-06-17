import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import { store } from '../store'

it('renders without crashing', () => {
  const div = document.createElement('div');
    <Provider store={store}>
      ReactDOM.render(<App />, div);
    </Provider>
  ReactDOM.unmountComponentAtNode(div);
});
