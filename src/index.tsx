import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

let element = document.getElementById('support');
if (element !== null) {

  const app = <App
    primaryColor={element.getAttribute('data-primary-color')}
  />

  ReactDOM.render(app, element);
}


