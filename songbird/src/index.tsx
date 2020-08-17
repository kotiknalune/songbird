import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';

import './theme/theme.sass';

document.cookie = 'SameSite=None; Secure';
ReactDOM.render(<App />, document.getElementById('root'));
