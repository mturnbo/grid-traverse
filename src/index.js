import React from 'react';
import ReactDOM from 'react-dom';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import App from './components/App';

UIkit.use(Icons);

ReactDOM.render(<App />, document.getElementById('app'));
