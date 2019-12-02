'use strict';

import React from 'react';
import Templates from './templates';

export default class TemplateSelector extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            select: '',
        };

        this.onSelectValueChange = this.onSelectValueChange.bind(this);
    }

    onSelectValueChange = event => {
        this.setState({
            select: event.target.value
        });

        this.props.onSelectValueChange(Templates[event.target.value]);
    };

    render = () => {
        const SelectStyle = {
            position: 'relative'
        };

        return (
            <select
                style={SelectStyle}
                onChange={this.onSelectValueChange}
                value={this.state.select}
            >
                <option>Empty template</option>
                <option value='activity'>Activity template</option>
                <option value='useCase'>Use case template</option>
                <option value='sequence'>Sequence template</option>
            </select>
        );
    };
}
