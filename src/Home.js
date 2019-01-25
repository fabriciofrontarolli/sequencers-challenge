import React, { Component } from 'react';
import { connect } from 'react-redux';
import sequencersActions from './actions/sequencers'
import Select from 'react-select';
import SequencersList from './Components/SequencersList';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedSequencer: undefined,
            sequencerArguments: undefined,
        }

        this.handleChange = this.handleChange.bind(this);
        this.buildAccumulatorsOptions = this.buildAccumulatorsOptions.bind(this);        
        this.handleArgumentsChange = this.handleArgumentsChange.bind(this);
        this.handleCreateSequencer = this.handleCreateSequencer.bind(this);
    }

    handleChange = selectedSequencer => {
        this.setState({ selectedSequencer });
    }

    buildAccumulatorsOptions() {
        const { sequencers } = this.props;
        return sequencers.availableAccumulators.map(() => (
            <Checkbox
                checked
                onChange={onChange}
            />
        ))
    }

    handleArgumentsChange(ev) {
        this.setState({ sequencerArguments: ev.target.value });
    }

    handleCreateSequencer() {
        /* TODO: Add Validation */
        const { addSequencer } = this.props;

        const sequencerData = {
            selectedSequencer: this.state.selectedSequencer,
            sequencerArguments: this.state.sequencerArguments,
        };

        const sequencer = sequencerData.selectedSequencer.sequencer.apply(this,
            sequencerData.selectedSequencer.requiresExtraInput ?
            sequencerData.sequencerArguments.split(",").map(n => parseInt(n))
            : undefined
        );

        const instantiatedSequencer = {
            sequencerData,
            sequencerFn: sequencer,
        }

        const createdSequencers = [ ...this.props.sequencers.createdSequencers, instantiatedSequencer ];
        addSequencer(createdSequencers);
    }

    render() {
        const { selectedSequencer } = this.state;
        const { sequencers } = this.props;

        return (
            <div className="home">
                <div className="container">
                    <div className="row page-title">
                        <div className="col s12 m12">
                            <h5>Activate a Sequencer</h5>
                        </div>    
                    </div>
                    <div className="row content">
                        <div className="col s5 m5">
                            <label>Sequencer</label>
                            <Select
                                value={selectedSequencer}
                                options={sequencers.availableSequencers}
                                onChange={this.handleChange}
                            />
                        </div>
                        {
                            (selectedSequencer && selectedSequencer.requiresExtraInput) && 
                            (
                                <div className="col s3 m3">
                                    <label>Sequencer Arguments</label>
                                    <input
                                        type="text"
                                        className="input-text"
                                        onChange={this.handleArgumentsChange}
                                        placeholder={
                                            selectedSequencer ? selectedSequencer.inputPlaceholder : ''
                                        }
                                    />
                                </div>
                            )
                        }
                    </div>
                    <div>
                        <div className="row content ">
                            <div className="col s12 m12 add-sequencer-container">
                                <button
                                    className="add-sequencer-button"
                                    onClick={this.handleCreateSequencer}
                                >Add Sequencer</button>
                            </div>
                        </div>
                    </div>
                    <SequencersList sequencers={this.props.sequencers.createdSequencers} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ sequencers }) => ({ sequencers });
const mapDispatchToProps = {
    addSequencer: sequencersActions.addSequencer
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
