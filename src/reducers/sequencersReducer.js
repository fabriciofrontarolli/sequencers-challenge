import Sequencers from '../../lib/sequencers';
import cloneDeep from 'lodash/cloneDeep';

const INITIAL_STATE = {
    availableSequencers: [{
            value: 'factorial',
            label: 'Factorial',
            requiresExtraInput: false,
            inputPlaceholder: '',
            sequencer: Sequencers.factorialSequencer,
        }, {
            value: 'fibonacci',
            label: 'Fibonacci',
            requiresExtraInput: false,
            inputPlaceholder: '',
            sequencer: Sequencers.fibonacciSequencer,
        }, {
            value: 'partial',
            label: 'Partial Sum',
            requiresExtraInput: true,
            inputPlaceholder: 'num1, num2, ...',
            sequencer: Sequencers.partialSumSequencer,
        }, {
            value: 'prime',
            label: 'Prime',
            requiresExtraInput: false,
            inputPlaceholder: '',
            sequencer: Sequencers.primeSequencer,
        }, {
            value: 'range',
            label: 'Range',
            requiresExtraInput: true,
            inputPlaceholder: 'start, step',
            sequencer: Sequencers.rangeSequencer,
        },
    ],
    availableAccumulators: [
        { value: 'accumulator', label: 'Accumulator' },
        { value: 'isEven', label: 'Is Even' }
    ],
    createdSequencers: [],
};

export default function sequencersReducer(state = INITIAL_STATE, action = {}) {
    const updatedState = cloneDeep(state);

    switch (action.type) {
        case 'ADD_SEQUENCERS': {
            updatedState.createdSequencers = action.createdSequencers;

            return updatedState;
        }
        default:
            return state
    }
}
