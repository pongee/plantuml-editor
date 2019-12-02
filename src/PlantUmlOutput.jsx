'use strict';

import React from 'react';
import PlantUmlEncoder from 'plantuml-encoder';
import styled from 'styled-components';

export default class PlantUmlOutput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tab: 'svg'
        };

        this.tabChange = this.tabChange.bind(this);
    }

    tabChange = event => {
        this.setState({
            tab: event.target.dataset.id,
        });
    };

    render() {
        function PlantumlImage(props) {
            const text = props.text;

            if (text && props.type === props.tab) {
                return <img
                    src={ props.baseUri + '/' + props.type + '/' + PlantUmlEncoder.encode(props.text)}
                    alt=''
                />;
            }

            return <span></span>
        }

        const TabMenu = styled.div`
            display: grid;
            background-color: #90caf9;
            height: 30px;
            grid-template-columns: auto auto;
        `;

        const TabMenuItem = styled.div`
            cursor: pointer;
            height: 25px;
            text-align: center;
            background-color: #90caf9;
            color: rgba(0, 0, 0, 0.7);
            line-height: 25px;
            &:hover ${ ({active}) => active && `,&` } {
                color: rgba(0, 0, 0, 0.9);
                border-bottom: 5px solid #0960a6;
            }
            ${ ({active}) => active && `border-bottom: 5px solid #0960a6;` }
        `;

        const TabItem = styled.div`
            overflow: auto;
            ${ ({visible}) => !visible && `display: none;` }
        `;

        return (
            <div>
                <TabMenu>
                    <TabMenuItem
                        data-id='svg'
                        active={this.state.tab === 'svg'}
                        onClick={this.tabChange}
                    >Svg</TabMenuItem>

                    <TabMenuItem
                        data-id='png'
                        active={this.state.tab === 'png'}
                        onClick={this.tabChange}
                    >Png</TabMenuItem>
                </TabMenu>

                <TabItem visible={this.state.tab === 'svg'}>
                    <PlantumlImage
                        baseUri={this.props.baseUri}
                        text={this.props.text}
                        type='svg'
                        tab={this.state.tab}
                    />
                </TabItem>

                <TabItem visible={this.state.tab === 'png'}>
                    <PlantumlImage
                        baseUri={this.props.baseUri}
                        text={this.props.text}
                        type='png'
                        tab={this.state.tab}
                    />
                </TabItem>
            </div>
        );
    }
}