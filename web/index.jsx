'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import PongeePlantUmlEditor from '../src/PongeePlantUmlEditor';

window.onload = function () {
    ReactDOM.render(<PongeePlantUmlEditor />,
        document.getElementById('app')
    );
};
