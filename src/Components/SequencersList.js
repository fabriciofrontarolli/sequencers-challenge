import React from 'react';
import Sequencer from './Sequencer';

const SequencersList = ({ sequencers }) => (
    <div className="row page-title">
        <h5>Created Sequencers</h5>
        {
            sequencers &&
            sequencers.map(seq => (
                <div className="col s3 m3">
                    <Sequencer {...seq} />
                </div>
            ))
        }
    </div>
);

export default SequencersList;
