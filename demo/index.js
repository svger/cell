import React from 'react';
import ReactDOM from 'react-dom';
import App from './component';

import { adaptPage } from 'cefc-utils/build/responsive';

adaptPage();

ReactDOM.render(<App />, document.querySelector('#content'));
