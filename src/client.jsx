import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout';

require('font-awesome-sass-loader');
require('./style/style.scss');

const app = document.getElementById('app');

ReactDOM.render(<Layout />, app);
