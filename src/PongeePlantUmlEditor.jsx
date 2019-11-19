'use strict';

import React from 'react';
import PongeePlantUmlOutput from './PongeePlantUmlOutput';
import PongeePlantUmlSource from './PongeePlantUmlSource';

export default class PongeePlantUmlEditor extends React.Component {
    static defaultProps = {
        baseUri: 'http://www.plantuml.com/plantuml',
    };

    constructor(props) {
        super(props);

        this.state = {
            text: '',
        };

        this.onSourceValueChange = this.onSourceValueChange.bind(this);
    }

    onSourceValueChange(text) {
        this.setState({
            text: text,
        });
    }

    render() {
        const PageStyle = {
            display: 'grid',
            gridTemplateColumns: '50% 50%',
            width: '100%',
            overflow: 'hidden',
        };

        return (
            <div style={PageStyle}>
                <PongeePlantUmlSource
                    onValueChange={this.onSourceValueChange}
                />
                <PongeePlantUmlOutput
                    baseUri={this.props.baseUri}
                    text={this.state.text}
                />
            </div>
        );
    }
}
