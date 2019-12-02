'use strict';

import React from 'react';
import PlantUmlOutput from './PlantUmlOutput';
import PlantUmlSource from './PlantUmlSource';
import TemplateSelector from './TemplateSelector';

export default class PongeePlantUmlEditor extends React.Component {
    static defaultProps = {
        baseUri: 'http://www.plantuml.com/plantuml',
    };

    constructor(props) {
        super(props);

        this.state = {
            sourceText: '',
            outputText: '',
        };

        this.onSourceValueChange = this.onSourceValueChange.bind(this);
        this.onSelectValueChange = this.onSelectValueChange.bind(this);
    }

    onSourceValueChange = text => {
        this.setState({
            sourceText: text,
            outputText: text,
        });
    };

    onSelectValueChange = text => {
        this.setState({
            sourceText: text,
            outputText: text,
        });
    };

    render = () => {
        const PageStyle = {
            display: 'grid',
            gridTemplateColumns: '50% 50%',
            width: '100%',
            overflow: 'hidden',
        };

        const MenuStyle = {
            backgroundColor: '#90caf9',
            height: '30px',
        };

        return (
            <div>
                <div style={MenuStyle}>
                    <TemplateSelector
                        onSelectValueChange={this.onSelectValueChange}
                    />
                </div>
                <div style={PageStyle}>
                    <PlantUmlSource
                        onValueChange={this.onSourceValueChange}
                        text={this.state.sourceText}
                    />
                    <PlantUmlOutput
                        baseUri={this.props.baseUri}
                        text={this.state.outputText}
                    />
                </div>
            </div>
        );
    };
}
