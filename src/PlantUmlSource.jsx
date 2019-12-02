'use strict';

import React from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-jsx';
import 'ace-builds/src-noconflict/theme-monokai';

export default class PlantUmlSource extends React.Component {
    constructor(props) {
        super(props);

        this.onValueChange = this.onValueChange.bind(this);
    }

    onValueChange = text => {
        this.props.onValueChange(text);
    };

    render = () => {
        const AceEditorStyle = {
            height: '100vh',
            minHeight: '100%',
            width: '100%',
        };

        return (
            <div>
                <AceEditor
                    style={AceEditorStyle}
                    mode='jsx'
                    theme='monokai'
                    fontSize={12}
                    value={this.props.text}
                    debounceChangePeriod={1000}
                    onLoad={this.load}
                    onChange={this.onValueChange}
                    focus={true}
                    showPrintMargin={true}
                    showGutter={true}
                    highlightActiveLine={true}
                    setOptions={{
                        useWorker: true,
                        showLineNumbers: true,
                        tabSize: 2,
                        newLineMode: false
                    }}
                />
            </div>
        );
    };
}