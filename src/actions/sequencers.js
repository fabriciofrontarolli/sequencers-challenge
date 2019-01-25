import {
    ADD_SEQUENCERS,
} from '../constants/sequencers'

export const addSequencer = (createdSequencers) => {
    return {
        type: ADD_SEQUENCERS,
        createdSequencers
    }
};

export default {
    addSequencer,
}
