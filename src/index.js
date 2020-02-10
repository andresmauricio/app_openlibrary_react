import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const headings = ['When', 'Who', 'Desciption'];

const properties = {
    title: 'Open Library API',
    headings,

}

ReactDOM.render(<App {...properties}/>, document.getElementById('root'));
