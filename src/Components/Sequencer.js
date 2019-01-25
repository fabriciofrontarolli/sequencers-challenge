import React, { Component } from 'react';

class Sequencer extends Component {
    constructor(props) {
        super(props);

        const { sequencerData } = this.props;

        this.state = {
            currentValue: this.props.sequencerFn(),
            title: sequencerData.selectedSequencer.label,
            isSequencerFinished: false
        }

        this.handleSequencerNext = this.handleSequencerNext.bind(this);
    }

    handleSequencerNext() {
        try {
            const currentValue = this.props.sequencerFn();
            this.setState({ currentValue });
        } catch (err) {
            /* Display message of end */
            this.setState({ isSequencerFinished: true });
        }
    }

    render() {
        return (
            <div className="container sequencer-container">
                <label className="sequencer-name">{ this.state.title }</label>
                {
                    this.props.sequencerData.sequencerArguments &&
                    <label className="sequencer-arguments" title={this.props.sequencerData.sequencerArguments}>
                    Arguments: { this.props.sequencerData.sequencerArguments }
                    </label>
                }
                <label>Current Value:</label>
                <label className="sequencer-current-value" title={this.state.currentValue}>
                    { this.state.currentValue }
                </label>
                <button onClick={this.handleSequencerNext} className="next-button">Next</button>
            </div>
        );
    }
}

export default Sequencer;
